# Deployment Guide - Experial

## Overview

Este proyecto usa GitHub Actions para CI/CD automático:
- **Branch `develop`** → Deploy a **Staging** (puerto 3001)
- **Branch `main`** → Deploy a **Producción** (puerto 3000)

## Configuración Inicial (Una sola vez)

### 1. Generar SSH Key para GitHub

En tu máquina local, genera una SSH key específica para deployments:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_deploy_key
```

### 2. Agregar la Key al Servidor

Copia la key pública al servidor:

```bash
ssh-copy-id -i ~/.ssh/github_deploy_key.pub -p 5531 root@168.197.49.178
```

O manualmente:
```bash
# Copia el contenido de ~/.ssh/github_deploy_key.pub
cat ~/.ssh/github_deploy_key.pub

# Conéctate al servidor
ssh -p5531 root@168.197.49.178

# Agrega la key al archivo authorized_keys
echo "PEGA_LA_KEY_AQUI" >> ~/.ssh/authorized_keys
```

### 3. Configurar GitHub Secrets

Ve a tu repositorio en GitHub → Settings → Secrets and variables → Actions

Agrega estos secrets:

| Secret Name | Value |
|-------------|-------|
| `SERVER_HOST` | `168.197.49.178` |
| `SERVER_USER` | `root` |
| `SERVER_PORT` | `5531` |
| `SERVER_SSH_KEY` | Contenido de `~/.ssh/github_deploy_key` (la privada, sin .pub) |

Para obtener la key privada:
```bash
cat ~/.ssh/github_deploy_key
```

### 4. Preparar el Servidor

Conéctate al servidor y ejecuta el script de setup:

```bash
ssh -p5531 root@168.197.49.178

# Una vez conectado, copia y ejecuta el contenido de server-setup.sh
# O sube el archivo y ejecútalo:
bash server-setup.sh
```

### 5. Crear Branch develop

```bash
cd /Users/leofontani/claudio/tests/Exp/experial
git checkout -b develop
git push -u origin develop
```

## Workflow de Desarrollo

### Para cambios en Staging:
```bash
git checkout develop
# hacer cambios
git add .
git commit -m "descripción del cambio"
git push origin develop
# → Se despliega automáticamente a staging
```

### Para promover a Producción:
```bash
git checkout main
git merge develop
git push origin main
# → Se despliega automáticamente a producción
```

## URLs

- **Producción**: http://168.197.49.178:3000
- **Staging**: http://168.197.49.178:3001

## Comandos Útiles en el Servidor

```bash
# Ver estado de las apps
pm2 status

# Ver logs
pm2 logs experial-production
pm2 logs experial-staging

# Reiniciar manualmente
pm2 restart experial-production
pm2 restart experial-staging

# Ver uso de recursos
pm2 monit
```

## Troubleshooting

### El deploy falla
1. Revisa los logs en GitHub Actions
2. Verifica que los secrets estén configurados correctamente
3. Verifica conexión SSH: `ssh -p5531 root@168.197.49.178`

### La app no carga
```bash
# En el servidor
pm2 logs experial-production --lines 50
# o
pm2 logs experial-staging --lines 50
```

### Nginx no funciona
```bash
nginx -t  # Verificar configuración
systemctl status nginx
systemctl restart nginx
```
