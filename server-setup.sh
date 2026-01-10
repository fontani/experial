#!/bin/bash
# ===========================================
# Server Setup Script for Experial
# Run this on your VPS: ssh -p5531 root@168.197.49.178
# ===========================================

echo "🚀 Setting up Experial deployment environment..."

# Update system
apt update && apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Install PM2 globally
npm install -g pm2

# Create directory structure
mkdir -p /var/www/staging/experial
mkdir -p /var/www/production/experial

# Set permissions
chown -R root:root /var/www

# Install Nginx
apt install -y nginx

# Create Nginx config for staging
cat > /etc/nginx/sites-available/experial-staging << 'EOF'
server {
    listen 80;
    server_name staging.experial.com;  # Cambiar por tu dominio o usar la IP

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Create Nginx config for production
cat > /etc/nginx/sites-available/experial-production << 'EOF'
server {
    listen 80;
    server_name experial.com www.experial.com;  # Cambiar por tu dominio

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Enable sites
ln -sf /etc/nginx/sites-available/experial-staging /etc/nginx/sites-enabled/
ln -sf /etc/nginx/sites-available/experial-production /etc/nginx/sites-enabled/

# Test and reload Nginx
nginx -t && systemctl reload nginx

# Setup PM2 to start on boot
pm2 startup systemd -u root --hp /root

# Configure firewall
ufw allow 'Nginx Full'
ufw allow 22
ufw allow 5531  # SSH port

echo "✅ Server setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Update the server_name in /etc/nginx/sites-available/experial-* with your domains"
echo "2. Run 'nginx -t && systemctl reload nginx' after updating"
echo "3. Consider setting up SSL with: certbot --nginx"
echo ""
echo "🌐 URLs (once deployed):"
echo "   Production: http://168.197.49.178:3000"
echo "   Staging:    http://168.197.49.178:3001"
