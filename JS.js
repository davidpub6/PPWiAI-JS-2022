//Zadania
			function WinOpen_pob(src) {
				window.open(src,"okienko","toolbar=no,directories=no,menubar=no,height=9999999,width=99999999,top=0,left=0");
				}
				
			function zd4_pob() { 
			alert("Uwaga!"); }
			
			function zd5_pob() {
				var r=confirm("Naciśnij klawisz");
				if (r==true)
					{ document.write("Nacisnąłeś OK!"); }
				else
					{ document.write("Nacisnąłeś Cancel!"); }
				}
				
			function zd6_pob() {
				var name=prompt("Napisz imię","Imię Nazwisko");
				if (name!=null && name!="")
					{
					document.write("Witaj " + name + "! jak się masz?");
					}
				}
				
			function zd7_pob() {
				var liczba1=prompt("liczba1=","");
				var liczba2=prompt("liczba2=","");
				var suma;
				var a=parseFloat(liczba1);
				var b=parseFloat(liczba2);
				suma=a+b;
				document.write("suma="+a+" + "+b+" = "+suma+"<br>");
				}
				
			function zd8_pob() {
				var D1=prompt("Dzień1=","");
				var D2=prompt("Dzień2=","");
				var roznica;
				var a=parseFloat(D1);
				var b=parseFloat(D2);
				
				roznica=a-b;
				
				document.write("<h1 style=\"color:green; font-size:46;\">"+"roznica="+a+" - "+b+" = "+roznica+"<br>");
				document.write("<h1 style=\"color:green; font-size:46;\">"+roznica+" * "+"86400"+" = "+(roznica*86400)+"<br>");
				}
				
			function zd10_pob() {
				//Nadawanie zmiennych
				var m_pob=prompt("m=","");
				var m1_pob, m2_pob;
				
				//Obliczenia
				m1_pob = m_pob;
				m1_pob= ++m1_pob;
				m2_pob = m_pob * m1_pob;
				
				//wypisywanie danych
				document.write("1/m = "+"1/"+m_pob+" = "+"1/"+m1_pob+" + "+"1/"+m2_pob+"<br>");
				}
				
			function zd11_pob() {
				//Nadawanie zmiennych
				var m_pob=prompt("m=","");
				var m1_pob, m2_pob, m3_pob, m4_pob;
				var m_pob=parseInt(m_pob);
				
				//Obliczenia
				m1_pob= m_pob + 1;
				m2_pob= m_pob + 2;
				m3_pob = m1_pob * m2_pob;
				m4_pob = m_pob * m1_pob;
				
				
				//wypisywanie danych
				
				document.write("1/m = "+"1/"+m_pob+" = "+"1/"+m1_pob+" + "+"1/"+m4_pob+"<br>")
				document.write("1/m = "+"1/"+m_pob+" = "+"1/"+m2_pob+" + "+"1/"+m3_pob+" + "+"1/"+m4_pob+"<br>")
				}
				
			function zd12_pob() {
				//Nadawanie zmiennych
				var m_pob=prompt("m=","");
				var m1_pob;
				var m_pob=parseInt(m_pob);
				
				//Obliczenia
				m1_pob= m_pob * 2;

				//wypisywanie danych
				document.write("1/m = "+"1/"+m_pob+" = "+"1/"+m1_pob+" + "+"1/"+m1_pob+"<br>")
				}
				
			function zd13_pob() {
				//Nadawanie zmiennych
				var A_pob=prompt("A=","");
				var B_pob=prompt("B=","");
				var a_pob, b_pob, c_pob, d1_pob, d2_pob, d3_pob, d4_pob;
				var a_pob=parseInt(A_pob);
				var b_pob=parseInt(B_pob);
				
				//Obliczenia
				c_pob = a_pob + b_pob;
				d1_pob=Math.pow(a_pob,c_pob);
				d2_pob=c_pob*(Math.pow(a_pob,b_pob)*b_pob);
				d3_pob=c_pob*(a_pob*Math.pow(b_pob,b_pob));
				d4_pob=Math.pow(b_pob,c_pob);
				r_pob=d1_pob+d2_pob+d3_pob+d4_pob;

				//wypisywanie danych
				document.write("Wczytane liczby:     A="+a_pob+"   B="+b_pob+"<br>")
				document.write("<p style=\"color: #000080; font-size: 3vw;\">"+"("+a_pob+" + "+b_pob+")^"+c_pob+"= "+
				a_pob+"^"+c_pob+" + "+c_pob+"*(("+a_pob+")^"+b_pob+")*("+b_pob+") + "+c_pob+"*("+a_pob+")*(("+b_pob+")^"+
				b_pob+") + "+b_pob+"^"+c_pob+" = "+d1_pob+" + "+d2_pob+" + "+d3_pob+" + "+d4_pob+" = "+r_pob)
				}
				
			function zd14a_pob() {
				//zmienne
				var a_pob, sina, cosa, tga, ctga;
				var b_pob=prompt("b=","");
				var c_pob=prompt("c=","");
				var b_pob=parseInt(b_pob);
				var c_pob=parseInt(c_pob);
				
				
				//obliczenia
				a_pob=(Math.pow(b_pob,2))-(Math.pow(c_pob,2));
				a_pob=Math.abs(a_pob);
				a_pob=(Math.sqrt(a_pob));
				
				sina=a_pob/c_pob;
				cosa=b_pob/c_pob;
				tga=a_pob/b_pob;
				ctga=b_pob/a_pob;
			
				//wypis
				document.write("a_pob= "+a_pob+"<br>");
				document.write("b_pob= "+b_pob+"<br>");
				document.write("c_pob= "+c_pob+"<br>");
				
				document.write("sin(alfa) = a/c = "+a_pob.toFixed(2)+"/"+c_pob.toFixed(2)+" = "+sina.toFixed(2)+"<br>");
				document.write("cos(alfa) = b/c = "+b_pob.toFixed(2)+"/"+c_pob.toFixed(2)+" = "+cosa.toFixed(2)+"<br>");
				document.write("tg(alfa) = a/b = "+a_pob.toFixed(2)+"/"+b_pob.toFixed(2)+" = "+tga.toFixed(2)+"<br>");
				document.write("ctg(alfa) = b/a = "+b_pob.toFixed(2)+"/"+a_pob.toFixed(2)+" = "+ctga.toFixed(2)+"<br>");
				}
				
			function zd17_pob() {
				//zmienne
				var a=parseFloat(prompt("a=",""));
				var b=parseFloat(prompt("b=",""));
				
				//funkcje
				function suma_pob(a, b) 
					{
					return a + b;
					}
					
				function odejmowanie_pob(a, b) 
					{
					return a - b;
					}
					
				function mnozenie_pob(a, b) 
					{
					return a * b;
					}
					
				function od_kwadratu_pob(a, b) 
					{
					return Math.pow(a,2);
					return Math.pow(b,2);
					}
					
				function reszta_z_dzielenia_a_przez_b_pob(a, b) 
					{
					return a % b;
					}
				
				//wypis
				document.write("<div style=\"color:navy;font-size:50px;\">"+"suma="+suma_pob(a,b)+"<br>" +
								"roznica="+odejmowanie_pob(a,b)+"<br>" +
								"iloczyn="+mnozenie_pob(a,b)+"<br>" +
								"kwadrat="+od_kwadratu_pob(a)+", "+od_kwadratu_pob(b)+"<br>" +
								"reszta="+reszta_z_dzielenia_a_przez_b_pob(a,b)+"<br>"+"</div>");
				}
				
			function zd21a_pob () {
				var b_pob=parseFloat(prompt("bok b=",""));
				var c_pob=parseFloat(prompt("bok c=",""));
				
				var a_pob=Math.sqrt((Math.pow(c_pob,2))-(Math.pow(b_pob,2)));
				var pole_pob=(a_pob*b_pob)/2;
				var h3_pob=(a_pob*b_pob)/c_pob;
				
				var sin_alfa_pob=a_pob/c_pob;
				var cos_alfa_pob=b_pob/c_pob;
				var tg_alfa_pob=a_pob/b_pob;
				var ctg_alfa_pob=b_pob/a_pob;
				
				var Alfa_pob= Math.asin(a_pob/c_pob)*180/Math.PI;
				var Beta_pob=90-Alfa_pob;
				var Gamma_pob=90;
				
				document.write("bok a ="+a_pob.toFixed(3)+"cm<br>");
				document.write("bok b ="+b_pob.toFixed(3)+"cm<br>");
				document.write("bok c ="+c_pob.toFixed(3)+"cm<br>");
				document.write("<br>");
				document.write("Pole ="+pole_pob.toFixed(3)+"^cm2<br>");
				document.write("<br>");
				document.write("Wysokosc h1 ="+a_pob.toFixed(3)+"cm<br>");
				document.write("Wysokosc h2 ="+b_pob.toFixed(3)+"cm<br>");
				document.write("Wysokosc h3 ="+h3_pob.toFixed(3)+"cm<br>");
				document.write("<br>");
				document.write("Sin alfa ="+sin_alfa_pob.toFixed(3)+"<br>");
				document.write("Cos alfa ="+cos_alfa_pob.toFixed(3)+"<br>");
				document.write("Tg alfa ="+tg_alfa_pob.toFixed(3)+"<br>");
				document.write("Ctg alfa ="+ctg_alfa_pob.toFixed(3)+"<br>");
				document.write("<br>");
				document.write("Kat Alfa="+Alfa_pob.toFixed(3)+"° <br>");
				document.write("Kat Beta ="+Beta_pob.toFixed(3)+"° <br>");
				document.write("Kat Gamma ="+Gamma_pob.toFixed(3)+"° <br>");
				}
				
			function zd14_pob (){
				var No = parseFloat(prompt("Podaj początkową ilość atomów pierwisatka : ",""));
				var t = parseFloat(prompt("Podaj czas w latach : ",""));
				var T12 = parseFloat(prompt("Podaj czas połowicznego zaniku : ",""));
				var lt
				var lambda = parseFloat(Math.LN2/T12);
				var N = parseFloat(No*Math.pow(Math.E,-lambda*t));
				
				document.write("<div style=\"color:navy;font-size:50px;\">"+
								"No = "+No.toFixed(2)+"[sztuk]<br>"+
								"t = "+t.toFixed(2)+"[lat]<br>"+
								"T1/2 = "+T12.toFixed(2)+"[lat]<br>"+
								"Lambda = "+lambda.toFixed(7)+"[/rok]<br>"+
								"N = "+N.toFixed(7)+"[sztuk]<br>"+"</div>");
				}
				
				
				// Dział 4
				
				
			function zd26_pob() {
				var komputer = {
					marka: 'Lenovo',
					system: 'Winodws 10',
					pojemnosc: '512GB',
					komputer_wyswietl_poblocki: function ()
					{
					 document.write(this.marka + ' , ' + this.system + ' , ' + this.pojemnosc)
					 }
					}
				komputer.komputer_wyswietl_poblocki();

				}
				
			function zd27_pob() {
				var komputer = {
					marka: 'Lenovo',
					system: 'Winodws 10 Home',
					pojemnosc: '512GB',
					komputer_wyswietl_poblocki: function ()
					{
					 document.write(this.marka + ' , ' + this.system + ' , ' + this.pojemnosc)
					 }
					}
				komputer.komputer_wyswietl_poblocki();
				
				komputer.pamiec="8";
				komputer.komputer_pokaz_poblocki=function() {alert('Pamiec: ' + this.pamiec + 'GB')}
				komputer.komputer_pokaz_poblocki();

				}
				
			function zd28_pob() {
				function komputer(marka_p,system_p,pojemnosc_p,pamiec_p) {
					
					this.marka=marka_p;
					this.system=system_p;
					this.pojemnosc=pojemnosc_p;
					this.pamiec=pamiec_p;
					}
				komputer.prototype.wypisz_poblocki = function () {
					 alert(this.marka + ', ' + this.system + ', ' + this.pojemnosc + ', ' + this.pamiec);
					 };
				var komputer1 = new komputer("Lenovo", "Winodws 10 Home", "512GB", "8");
				var komputer2 = new komputer('Acer', 'Windows 11 Home', '128GB', '4');
				komputer1.wypisz_poblocki();
				komputer2.wypisz_poblocki();
				document.write("dostęp do właściwości"+"<br>");
				document.write("komputer pierwszy"+" "+komputer1.marka+" "+komputer1.system+" "+komputer1.pojemnosc+" "+komputer1.pamiec);
				}
				
				//Dział 6
				
			function zd62_pob() {
				var x=prompt("podaj liczbę x=","");
				var a=parseFloat(x);
				document.write("czytana liczba x="+a+"<br>");
				if(a>0)
				{document.write("czytana liczba jest większa od 0"+"<br>");}
				if(a<0)
				{document.write("czytana liczba jest mniejsza od 0"+"<br>");}
				if(a==0)
				{document.write("czytana liczba jest równa 0"+"<br>");}
				// Dokończ dwa pozostałe przypadki a==0 i a<0
				// polskie litery mają działać(uzupełnij w kodzie strony)
				}

			function zd64_pob() {
				var x = parseInt(prompt("Podaj liczbę",""));
				if (x % 2 == 0){
					document.write("<p style=\"color: red; font-size: 3mm; \">" + x + " Jest liczbą parzystą" + "</p>");
				}
				else{ document.write("<p style=\"color: silver; font-size: 5mm; \">" + x + " Jest liczbą nieparzystą" + "</p>");}
			}

			function zd65_pob() {
				var rok_pob = parseInt(prompt("Od kiedy JavaScript jest w użyciu.","Podaj rok"));
				if(rok_pob == 1995) {document.write("<p style=\"color: blue; font-size: 4mm; \">Brawo znasz rok od kiedy działa Javasript </p>");}
				else {document.write("<p style=\"color: red; font-size: 7mm; \">Źle musisz jeszcze poczytać </p>");}
				document.write("Wczytany rok: " + rok_pob);
			}

			function zd66_pob() {
				for(i=1;i<=10;i++) {
					document.write("Wyświetlam "+i+" raz"+" Pobłocki"+"<br>");
				}
			}

			function zd67_pob() {
				for(i=1;i<=10;i++) {
					if(i % 2 == 0) {
						document.write("<p style=\"font-size:42px;\"> Wyświetlam "+i+" raz"+" Dawid"+"</p>");
					}
					else {
						document.write("<p style=\"font-size:42px;\"> Wyświetlam "+i+" raz"+" Pobłocki"+"</p>");
					}
				}
			}

			function zd68_pob() {
				var ilo_pob=parseInt(prompt("Podaj liczbe",""));
				for(i=1;i<=10;i++) {
					if(ilo_pob % 2 == 0) {
						document.write("<p style=\"color: blue; font-size:42px;\"> Wyświetlam "+i+" raz"+" Pobłocki"+"</p>");
					}
					else {
						document.write("<p style=\"color: green; font-size:42px;\"> Wyświetlam "+i+" raz"+" Dawid"+"</p>");
					}
				}
			}

			function zd69_pob() {
				for ( var i=1; i<=10; i++) {
					for ( var k=1; k<=i; k++) {
						document.write("&nbsp");
				 	}
					document.write(i+"<br>");
				}
			}

			function zd70_pob() {
				var ile_raz = parseInt(prompt("Ile razy powotórzyć:",""));
				var inc = prompt("Podaj twoje inicjały","");
				for ( var i=1; i<=ile_raz; i++) {
					for ( var k=1; k<=i; k++) {
						for (var j=1; j<=10; j++) {
							document.write("&nbsp");
						}
				 	}
					document.write(i+"_"+inc+"_"+i+"<br>");
				}
			}

			function zd71_pob() {
				var a_pob=5;
				var b_pob=25;
				var i,j;

				for (i=1; i<=b_pob;i++){
					document.write("*");
				}

				for (i=1; i<=(a_pob-2);i++){
					document.write("<br>"+"*");

					for(j=1;j<=(b_pob-2);j++){
						document.write("&nbsp&nbsp");
					}

					document.write("*");
				}

				document.write("<br>");

				for (i=1; i<=b_pob;i++){
					document.write("*");
				}
				
			}

			function zd72_pob() {
				var a_pob=parseInt(prompt("Podaj liczbe wierszy:",""));
				var b_pob=parseInt(prompt("Podaj liczbe kolumn:",""));
				var i,j;

				for (i=1; i<=b_pob;i++){
					document.write("*");
				}

				for (i=1; i<=(a_pob-2);i++){
					document.write("<br>"+"*");

					for(j=1;j<=(b_pob-2);j++){
						document.write("&nbsp&nbsp");
					}

					document.write("*");
				}

				document.write("<br>");

				for (i=1; i<=b_pob;i++){
					document.write("*");
				}
				
			}

			function zd73_pob() {
				var a_pob=parseInt(((prompt("Podaj nazwisko:","").length)%4)+5);
				var b_pob=parseInt(((prompt("Podaj imie:","").length)%6)+20);
				var i,j;

				for (i=1; i<=b_pob;i++){
					document.write("*");
				}

				for (i=1; i<=(a_pob-2);i++){
					document.write("<br>"+"*");

					for(j=1;j<=(b_pob-2);j++){
						document.write("&nbsp&nbsp");
					}

					document.write("*");
				}

				document.write("<br>");

				for (i=1; i<=b_pob;i++){
					document.write("*");
				}
				
			}

			function zd74_pob() {
				var l1_t_pob=parseInt(prompt("Podaj liczbe a (z przedzialu <20;60>):",""));
				var l2_t_pob=parseInt(prompt("Podaj liczbe b (z przedzialu <20;60>):",""));
				var pocz_pob=parseInt(prompt("Podaj liczbe poczatkowa:",""));
				var tekst_pob=prompt("Podaj tekst:","");

				if (l1_t_pob < 20 || l1_t_pob > 60){
					document.write("liczba a nie nalezy do przedzialu <20;60>");
				}

				else if (l2_t_pob < 20 || l2_t_pob > 60){
					document.write("liczba b nie nalezy do przedzialu <20;60>");
				}

				else {
					if (l1_t_pob < l2_t_pob){
						for (var i=pocz_pob;i<=100;i+=5){
							document.write("<p style=\"font-size:"+i+"px; color: black;\"><br>"+tekst_pob+"<br></p>");
						}
					}

					else if (l2_t_pob < l1_t_pob){
						for (var i=pocz_pob;i>=0;i-=5){
							document.write("<p style=\"font-size:"+i+"px; color: black;\"><br>"+tekst_pob+"<br></p>");
						}
					}
				}
				
			}

			function punkty_kratowe () {
				var R_pob=parseInt(prompt("Podaj R :",""));
				var licznik_pob=0;
				for ( var i=R_pob; i>=-R_pob; i--)
				{
					for ( var k=-R_pob; k<=R_pob; k++)
					{
						document.write("("+i+","+k+")"+"&nbsp;&nbsp;");
						licznik_pob++;
					}
					document.write("<br>");
				}
				document.write("Licznik :"+licznik_pob);
			}

			function zd79_pob () {
				var R_pob=prompt("Podaj R :","");
				var licznik_pob=0;
				var r_pob;
				for ( var i=Math.round(R_pob)+1; i>=-Math.round(R_pob)-1; i--)
				{
					for ( var k=-Math.round(R_pob)-1; k<=Math.round(R_pob)+1; k++)
					{
						r_pob=Math.sqrt((i*i)+(k*k));

						if (r_pob <= R_pob){
							licznik_pob++;
						}
					}
				}
				document.write("Licznik :"+licznik_pob);
			}

			function zd75_pob () {
				var w;
				for ( var i=0; i<=39; i++) {
					w=i*i+i+41;
					document.write("w("+i+")="+w+"<br>");
					if (i%5==0) {
						if (confirm("Continue?") == false) {
							break;
						}
					}
				}
			}

			function zd76_pob () {
				var x_pob, x2_pob, x4_pob;
				for ( var i=24; i<=39; i++) {
					x_pob=i;
					x2_pob=Math.sqrt(x_pob);
					x4_pob=Math.sqrt(x2_pob);
					document.write("x = "+x_pob+"  x(2) = "+x2_pob+"  x(4) = "+x4_pob+"<br>");
					if (i%3==0) {
						if (confirm("Continue?") == false) {
							break;
						}
					}
				}
			}

			function zd77_pob () {
				var x_pob=parseInt(prompt("Podaj do ktorej",""));
				for ( var i=2; i<=x_pob; i++) {
					if (i%2==0) {
						document.write(i+"<br>");
					}
				}
			}

			function zd78_pob () {
				var x1_pob=parseInt(prompt("Podaj liczbe 1",""));
				var x2_pob=parseInt(prompt("Podaj liczbe 2",""));

				if (x1_pob < x2_pob) {
					for ( var i=x1_pob; i<=x2_pob; i++) {
						if (i%2!=0) {
							document.write("<p style=\"color: green;\">"+i+"</p>");
						}
					}
				}

				if (x1_pob > x2_pob) {
					for ( var i=x1_pob; i>=x2_pob; i--) {
						if (i%2!=0) {
							document.write("<p style=\"color: blue;\">"+i+"</p>");
						}
					}
				}

				if (x1_pob == x2_pob) {
					confirm("Brak obliczeń");
				}
			}