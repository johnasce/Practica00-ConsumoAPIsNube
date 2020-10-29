# Practica00-ConsumoAPIsNube
Consumo de una API en la Nube

 	PRÁCTICA DE LABORATORIO 
### PRACTICA DE LABORATORIO
### CARRERA: Computacion
### ASIGNATURA : Plataformas WEb
### TÍTULO PRÁCTICA :  Desarrollo de una aplicación web utilizando la API de apilist.fun
### ESTUDIANTE: JOHN HENRY CHIQUI C. ASCE

ACTIVIDADES DESARROLLADAS

 OBJETIVO 

• Conocer las arquitecturas y patrones arquitectónicos web para el diseño de aplicaciones web
• Interactuar con servicios web de plataformas en la nube
 
 
1.	Desarrollar una aplicación web usando una de las API gratuitas de API
List Fun. Tener en cuenta que se deben aplicar buenas prácticas para el
desarrollo de la interfaz gráfica de usuario, para la cuál se permite utilizar
plantilla de Bootstrap.

•	La aplicación web esta desarrollado y consuma una api externa.

![image](https://user-images.githubusercontent.com/51840139/97553404-62083200-19a3-11eb-849a-f5c1edea9b50.png)

•	Boostrap como desarrollo de la interfaz grafica para que tenga una vista agradable para el usuario.

 ![image](https://user-images.githubusercontent.com/51840139/97553458-72b8a800-19a3-11eb-852f-fcb3f3d4490f.png)


•	URL de la api para el consumo de un servicio.

![image](https://user-images.githubusercontent.com/51840139/97553473-79dfb600-19a3-11eb-9e13-d9e315b19d6e.png)



2.	La aplicación Web debe permitir buscar la información a través de un nombre.

•	La aplicación busca por nombre y devuelve el resultado con el nombre del pokemon

![image](https://user-images.githubusercontent.com/51840139/97553535-882dd200-19a3-11eb-8484-f106c9e820ca.png)


•	Además, se deberá visualizar toda la información disponible de la base de datos.

![image](https://user-images.githubusercontent.com/51840139/97554345-9cbe9a00-19a4-11eb-91c2-2fd25a0d6c10.png)


Se visualiza el resultado del objeto json con los valores de: la url de la imagen, el nombre del pokemon, los movimientos que tiene, las habilidades, los stats o estatus, y el numero de juegos.
 


•	También, la aplicación deberá aplicar paginación en caso de la búsqueda del primer requerimiento. Es decir, si la búsqueda retorna más de 5 resultados se deberá paginar los mismos según el total de resultados obtenidos.

La paginación se encuentra en la parte inferior de la pagina para buscar otro pokemon.

![image](https://user-images.githubusercontent.com/51840139/97554370-a6480200-19a4-11eb-81c0-a0d8bf7f16b9.png)

![image](https://user-images.githubusercontent.com/51840139/97554403-b06a0080-19a4-11eb-8338-c9bd79100ec3.png)
 
              

•	Por último, la interfaz gráfica de aplicada debe ser intuitiva y sencilla aplicando conceptos de experiencia de usuario (justificar en el informe).
La interfaz de usuario es sencilla e intuitiva, que solo con leer las instrucciones podrá hacer búsquedas y obtener información relevante, pero se limita a ciertos usuarios que no poseen todas sus facultades de interacción con una maquina ya que no fue desarrollado con un propósito en especifico sino a nivel educativo para conocimiento de cómo consumir un API y practicar lo visto en clases.

3.Identificar gráficamente la arquitectura y el patrón de diseño de la aplicación a desarrollar.

![image](https://user-images.githubusercontent.com/51840139/97554412-b6f87800-19a4-11eb-9a44-d69223e6d4cf.png)

 
El cliente ligero hace una petición mediante el método get a un servidor remoto, javascript se encarga de hacer el proceso de Ajax para que se pase a un estado de request si el servidor obtiene esa solicitud lo procesa y se envía la información devuelta hacia el cliente ligero y se presenta en la interfaz gráfica así es posible una comunicación de manera transparente para el usuario final.



4.	Generar una llave para consumir los servicios web de la API (opcional, depende de la API seleccionada).

La api fue publica y no requería de ninguna llave para ser consumida, asi que se vuelve opcional.

5.	Crear un repositorio en GitHub con el nombre “Practica00 – Consumo de APIs en la nube” 

![image](https://user-images.githubusercontent.com/51840139/97554435-c5469400-19a4-11eb-90b9-fcd1780c11b2.png)


6.	Desarrollar una aplicación con HTML + CSS + Javascript + Web Services para buscar información y visualizar toda la información disponible a través de la API.

![image](https://user-images.githubusercontent.com/51840139/97554463-d099bf80-19a4-11eb-91a7-f578711036ff.png)

 
7.	Implementar el README del repositorio del proyecto con la misma información del informe de la práctica.

El readme se encuentra en el repositorio.




Nombre de Usuario GitHub: johnasce
URl: https://github.com/johnasce/Practica00-ConsumoAPIsNube.git

RESULTADO(S) OBTENIDO(S):
Creacion de una aplicación web para el consumo de una API.

Obtener resultados al realizar una consulta al servidor.

CONCLUSIONES:

Con la aplicación web se tiene la ventaja de obtener información de una base de datos que es relevante para el uso interactivo del sistema que se presenta los resultados al usuario de una manera interactiva, por otra parte la aplicación es muy amigable con el usuario y si interfaz es simple para quien lo utilice.






















