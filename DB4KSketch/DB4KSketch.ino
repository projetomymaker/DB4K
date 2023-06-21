void my_9;

int pino_led_vermelho= 9;

void setup() {
  pinMode(pino_led_vermelho, OUTPUT);
}

void loop() {
  // Acende o LED com a cor indicada.
  digitalWrite(pino_led_vermelho,HIGH);
  // Mantem o LED aceso por 1 segundo.
  delay (1000);
  // Apaga  o LED com a cor indicada.
  digitalWrite(pino_led_vermelho,LOW);
  // Mantem o LED apagado por 1 segundo.
  delay (1000);

}