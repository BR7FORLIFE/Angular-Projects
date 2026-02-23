### Capa de tiempo real

NO es un emisor de datos es mas un continuo o sistema sensitivo de latencia
que comprende los siguientes conceptos: 

- Ingiere eventos de alta frecuencia (eventos a lo cual se llamarán records en este proyecto)
- Transforma de manera incremental 
- Mantiene un estado derivado
- Emite proyecciones de manera consistente
- Hace todo bajo estrictos controles de latencia


### Modelo Conceptual

Piensa en el siguiente modelo: 

```

Registro de eventos o records ilimitados
    ↓
Grafico de calculos incremental
    ↓
Vistas materializadas (IU/proyecciones)
    ↓
Selectores de interfaz de usuario

```
**La palabra clave en este sistema es <p style="color: #09f">incremental</p>**

- Si tu sistema recomputa o reprocesa desde 0 cada vez que se actualiza, no es un motor de flujo (stream)
Es un procesador por lotes que pretende ser en tiempo real a lo cual no lo es


### Nucleo de un sistema de flujos en tiempo real

**1. Continuo**

No hay un fin

No se puede confiar en: 
    
    - Recomputacion completa
    - ornamiento global en cada tick de tiempo
    - Reconstruccion de matrices grandes

Todo debe ser incremental y acotado    

**2. Procesamiento de baja latencia**

si tu recibes 100 actualizaciones/segundo

    - Eso es una actualizacion cada 10ms
    - Su presupuesto total de procesamiento por actualizacion debe ser muy inferior a ese
    - Un ejemplo realista es 1ms por evento promedio

De lo contrario puede ocurrir: 

    - Aumento en el retraso
    - El bucle de eventos se bloquea
    - Caida de fotogramas
    - Auumentos de picos en el Garbagge Collector


**3. Estado de evolucion deterministico**

dado: 
    S(n+1) = f(S(n), event)

el motor deberia: 

    - mutar las partes minimas del estado
    - mantener la estabilidad referencial lo maximo posible
    - evitar actualizaciones lineales O(n)


**Manejar Backpressure**

si la tasa de ingestion > tasa de procesamiento

Problemas: 
    
    - La cola crece
    - La memoria crece
    - La latencia crece
    - La UI se bloquea

un motor de flujo define: 
    
    - politica de eliminacion
    - actualizaciones fusionadas
    - ventanas de lotes
    - compactacion instantaneas