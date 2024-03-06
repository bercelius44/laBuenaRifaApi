const html = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
			rel="stylesheet"
		/>

		<style>
			* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #f2f4f3;
  font-family: "Lato", sans-serif;
}

h2 {
  font-size: 24px;
  color: #ff1b1c;
  margin: 20px 0;
}

p {
  font-size: 18px;
}

ul {
  list-style: none;
}

.main-container {
  width: 650px;
  margin: auto;
  margin-top: 50px;
}

.main-logo {
  display: block;
  height: 100px;
  margin: auto;
}

.card-title-container {
  height: 100px;
  padding: 25px 0;
  margin: auto;
  margin-top: 50px;

  background-color: #ff1b1c;
}

.card-title {
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  margin-left: 50px;
}

.card-content-container {
  padding: 30px;
  background-color: #f2f4f3;
  margin-bottom: 100px;
}

.card-name {
  font-weight: bold;
}

.card-description {
  margin-top: 20px;
}

.card-table1-row {
  border: 1px solid #ced4da;
  padding: 20px 0;
  text-align: center;
}

.card-table1-row1 {
  border-top: none;
  padding-top: 5px;
  padding-bottom: 10px;
}

.ticket-number {
  margin-top: 5px;
  font-size: 22px;
  font-weight: bold;
  color: #49111c;
}

.card-table1-title {
  display: inline-block;
  border: 1px solid #ced4da;
  padding: 10px 0;
  padding-left: 20px;
  font-weight: bold;
}

.card-table1-title1 {
  width: 50%;
}

.card-table1-title2 {
  width: 25%;
}

.card-table1-title3 {
  width: 75%;
}

.card-table1-item {
  display: inline-block;
  border: 1px solid #ced4da;
  border-top: none;
  padding: 10px 0;
  padding-left: 20px;
}

.card-addr-container {
  border: 1px solid #ced4da;
  padding: 5px 10px 10px 10px;
}

.card-addr-txt {
  margin-top: 5px;
}

.card-footer {
  margin-top: 50px;
}
		</style>

		<title>Document</title>
	</head>
	<body>
        <div class="main-container">
            <img class="main-logo" src="https://i.postimg.cc/0Qddkx9Q/logo-Horizontal.png"></img>
			<div class="card-container">
				<div class="card-title-container">
					<p class="card-title">Gracias por tu pedido</p>
				</div>
				<div class="card-content-container">
					<p class="card-name">Hola Ivan,</p>
					<p class="card-description">Hemos recibido correctamente tu pedido <b>#207257</b> y lo estamos procesando:</p>
					
					<h2>Números para el Evento</h2>					
					<div class="card-table1-row">
						<p>Entradas Compradas</p>
					</div>
					<div class="card-table1-row card-table1-row1">						
						<p class="ticket-number">29116</p>						
						<p class="ticket-number">96045</p>						
						<p class="ticket-number">99472</p>						
					</div>
					
					<h2>[Pedido #207257] (diciembre 11, 2023)</h2>	
					<div >
						<div>
							
								<p class="card-table1-title card-table1-title1">Producto</p><p class="card-table1-title card-table1-title2">
									Cantidad</p><p class="card-table1-title card-table1-title2">
										Precio</p>
							 
						</div>
						<div>
							
								<p class="card-table1-item card-table1-title1">Accesorios BMW240-S1000RR</p><p class="card-table1-item card-table1-title2">
									3</p><p class="card-table1-item card-table1-title2">
										$30,000</p>
							 
						</div>
					</div>

					<div >
						<div>
							<p class="card-table1-title card-table1-title3">Subtotal</p><p class="card-table1-item card-table1-title2">
								$30,000</p>
						</div>
						<div>
							<p class="card-table1-title card-table1-title3">Métodos de pago</p><p class="card-table1-item card-table1-title2">
								Pago vía PSE</p>
						</div>
						<div>
							<p class="card-table1-title card-table1-title3">Total</p><p class="card-table1-item card-table1-title2">
								$30,000</p>
						</div>
						
					</div>

					<h2>Dirección de facturación</h2>	
					<div class="card-addr-container">
						<p class="card-addr-txt">Ivan Luna Duran</p>
						<p class="card-addr-txt">Medellin</p>
						<p class="card-addr-txt">3016383889</p>
						<p class="card-addr-txt">ivanlunadura@gmail.com</p>
					</div>
					<p class="card-footer">¡Gracias por usar labuenarifa.com!</p>
				</div>
			</div>
        </div>
    </body>
</html>
`;

module.exports = { html };
