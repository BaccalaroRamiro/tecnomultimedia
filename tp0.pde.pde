void setup (){
size (600,600);
background (30,25,103);

}

void draw () {
   println ("x:");
println (mouseX);
println("y:");
println (mouseY);
//fondo
fill(0);
rect (0,330,60,300);
rect (58,385,30,200);
rect (82,308,35,400);
rect (113,427,40,200);
rect (154,380,90,250);
rect (357,357,70,300);
rect (425,287,40,400);
rect (461,417,300,300);
rect (488,322,35,309);
rect (440,263,7,50);
rect (434,282,20,30);
strokeWeight(3);
line(88,310,88,282);
rect (464,396,50,100);
rect (522,370,40,100);
rect (575,311,40,200);

fill (150);
noStroke ();
//cuerpo
circle (300,400,230);
circle (290,250,180);
circle (280,120,150);
//sombras cuerpo
fill (255);
circle (274,112,143);
circle (280,245,160);
circle (290,400,210);
fill (0);
strokeWeight(5);
stroke(0);
//ojos
circle (289,95,12);
circle (250,100,15);
//suelo
noStroke();
fill(40,147,44);
circle (5,510,40);
circle (24,512,40);
circle (227,515,45);
circle (350,520,55);
circle (242,510,30);
circle (368,510,30);
triangle (519,502,523,471,523,504);
triangle (526,502,530,479,530,502);
triangle (532,501,534,466,537,503);
triangle (192,500,196,469,198,501);
triangle (199,500,203,468,210,500);
triangle (207,501,211,469,219,501);
triangle (183,505,185,480,191,503);
rect (0,500,600,600);
stroke(52,36,20);
//brazos
strokeWeight (5);
line(378,225,430,165);
line(430,165,480,130);
line (467,139,473,124);
line (467,138,484,139);
line(200,232,116,205);
line (116,205,75,167);
line(86,176,90,161);
strokeWeight (3);
//nariz
fill (216,126,15);
triangle (261,118,219,139,267,130);
line (254,122,259,130);
line (245,127,248,133);
fill (70,41,6);
circle (286,228,15);
circle (289,274,15);
circle (291,321,15);
circle (289,366,15);
//boca
circle (274,156,3);
circle (283,151,3);
circle (289,145,3);
circle(265,156,3);
//brillo ojos
stroke(0);
fill(255);
circle (253,97,7);
circle (292,93,7);
//sombrero
fill(0);
fill (10,5,44);
ellipse (278,53,150,50);
rect (242,6,70,50,10);
fill (160,21,23);
rect (242,37,70,20);
noStroke();
fill(0);
//nieve
fill (255);
circle (395,21,5);
circle (430,45,5);
circle (385,83,5);
circle (400,166,5);
circle (515,86,5);
circle (492,27,5);
circle (530,213,5);
circle (438,273,5);
circle (571,267,5);
circle (468,201,5);
circle (570,63,4);
circle (555,145,6);
circle (159,22,6);
circle (57,21,5);
circle (20,104,5);
circle (97,66,5);
circle (171,152,5);
circle (79,242,6);
circle (28,188,5);
circle (143,269,6);
circle (21,318,5);
circle (102,115,5);
circle (179,80,5);












  
}
