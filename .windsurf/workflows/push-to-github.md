---
description: Este Workflow ayudara a hacer commits y push a github
auto_execution_mode: 3
---

# ti­tulo: Flujo de Commit y Push en Git

## descripcion: Gui­a al usuario a traves de un flujo ti­pico de Git - revisar el estado, preparar (staging), hacer commit y hacer push â€” con puntos de control para confirmacion del usuario en cada paso

## Paso 1: Verificar el estado de Git

Ejecuta el siguiente comando:

```bash
git status
```

## Paso 2: Preguntar si deseas continuar

Pregunta:

> Quieres continuar con la preparaciÃ³n de los cambios? (sÃ­/no)

- Si **si­**, continua al Paso 3.  
- Si **no**, finaliza el flujo de trabajo.  

## Paso 3: Preparar todos los cambios

Ejecuta el siguiente comando:

```bash
git add .
```

## Paso 4: Preguntar si deseas hacer commit

Pregunta:

> Quieres hacer commit de los cambios ahora? (sÃ­/no)

- Si **si**, continua al Paso 5.  
- Si **no**, finaliza el flujo de trabajo.  

## Paso 5: Obtener mensaje de commit

Pregunta:

> Por favor, ingresa tu mensaje de commit:

Luego ejecuta:

```bash
git commit -m "<user-input>"
```

## Paso 6: Preguntar si deseas hacer push

Pregunta:

> Quieres hacer push del commit al repositorio remoto? (sÃ­/no)

- Si **si­**, continua al Paso 7.  
- Si **no**, finaliza el flujo de trabajo.  

## Paso 7: Hacer push al repositorio remoto

Ejecuta el siguiente comando:

```bash
git push
```
