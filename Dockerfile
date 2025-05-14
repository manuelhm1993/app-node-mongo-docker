# Toda imagen creada se basa en otra imagen
FROM node:18 

# Se establece el directorio de trabajo dentro del contenedor
RUN mkdir -p /home/app

# Se establece de donde se va a copiar el código (SO anfitrión)
COPY . /home/app

# Se establece o expone el puerto que va a escuchar la aplicación
EXPOSE 3000

# Se establece el comando que se va a ejecutar al iniciar el contenedor para ejecutar la app
CMD ["node", "/home/app/index.js"]