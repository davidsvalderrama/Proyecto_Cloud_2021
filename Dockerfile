# creamos una variable
ARG PORT=3000
# traemos la imagen de node 12 con kernel de alpine
FROM node:12-alpine
# label para agregar metadatos
LABEL autor="JDSV-AACA"
# cremos el directorio de la app
WORKDIR /usr/src/app
#ENV variables
ENV AWS_ACCESS_KEY=ASIAZ7VWSH65B5UJXVEO
ENV AWS_SECRET_KEY=Lyh6SGT3o4v/bs9wiyeGISfhC5BgqtIG4L/4Sclx
ENV AWS_SESSION_TOKEN=IQoJb3JpZ2luX2VjEJ3//////////wEaCXVzLXdlc3QtMiJGMEQCIFUyBv+yEHyOPINQGOQrBpLhzUBwREHJIUNZlooRr+UfAiBeA0dtCt8DTjiM9PHHIHLkeSW0FWnGJTsoxDIXLcZzhCqpAggmEAAaDDY4NjUwMzkwMzE2MiIM2COUK9+ccbGbiulXKoYC+wUNbZvcjc2d1HhEB/EROKcsNx4+nCODSsLQjen7zxzwHMogr6q3GxDRpiwNJdM+uCTlXutTS0+xvzFrHMOALw4wDaxScmVyZE4gPW1r1D7AdLsG/4aPAwcQCn3LuS49v0gns6wwqgo5CSYJFTJHOQ4k+4Bu1c9giHRNKhJS4MYo8pHskZv9wpqbGi4S8Gbvr08Dpzt/v6PY3ON7VbinZ3EsZ0rvWtpeSchK1YcDp6fCenu76GAS1zGCcoeBnEov6zNzKcyHmUuu+8ZQd8iq0rseBiMWuxRC65mGxojmAOle3pqXdwejaUwgwDiC/WYvyuPet+6hiLdxNRthaEkEcBADVqH60TDa782EBjqeATxbW/UXl0qUN9fgzunzSIpbfsFDYJKTWyhLALSlHNJShrEPXK3b5cv3SzVg/wOSggXldbg7TD5IkZEPnwoVJ/xDI/PAhAvOVs1SvFDug+sn4PAVhVjv00VmaNARuMMPVc7GQAZqJzvuFUd80OtNieRTOm0/5Rdx1IT6b7satPCCscIGcJkWizwQnoujxbNVVr7iF6CnzDfYFBUEEMWq
# copiamos el archivo a nuestra carpeta 
COPY package*.json ./
# instalamos las dependencias
RUN npm install
# copiamos todo al directorio de trabajo
COPY . .
# exponemos el puerto
EXPOSE ${PORT}
# corremos el comando para nuestra app
CMD [ "node", "./bin/www" ]