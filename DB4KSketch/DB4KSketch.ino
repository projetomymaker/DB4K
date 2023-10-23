int pino_analogico_LDR_luz = A2;
int referencia_luz_alta;
int referencia_luz_baixa;
int pino_led_vermelho= 9;
int pino_led_verde= 11;
int pino_led_amarelo= 10;


int verifica_luminosidade()
{
int luminosidade = 0;
for (int i = 0; i<10;++i){
luminosidade = analogRead(pino_analogico_LDR_luz) + luminosidade;
}
luminosidade = luminosidade/10;
return luminosidade;
}



void setup() {
  referencia_luz_alta = verifica_luminosidade() + 70;
  referencia_luz_baixa = verifica_luminosidade() - 90;
  pinMode(pino_led_vermelho, OUTPUT);
  pinMode(pino_led_verde, OUTPUT);
  pinMode(pino_led_amarelo, OUTPUT);
}

void loop() {
  while((verifica_luminosidade() >= referencia_luz_alta )) {
    digitalWrite(pino_led_vermelho,HIGH);
    digitalWrite(pino_led_verde,LOW);
    digitalWrite(pino_led_amarelo,LOW);
  }
  while(((referencia_luz_baixa <verifica_luminosidade())&&(verifica_luminosidade() < referencia_luz_alta ))) {
    digitalWrite(pino_led_amarelo,HIGH);
    digitalWrite(pino_led_verde,LOW);
    digitalWrite(pino_led_vermelho,LOW);
  }
  while((verifica_luminosidade() <= referencia_luz_baixa )) {
    digitalWrite(pino_led_verde,HIGH);
    digitalWrite(pino_led_amarelo,LOW);
    digitalWrite(pino_led_vermelho,LOW);
  }

}