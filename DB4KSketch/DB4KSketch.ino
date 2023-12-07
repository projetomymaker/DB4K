#include <LiquidCrystal.h>

int pino_led_verde= 11;
int pino_led_verde2= 49;
int lcd_pino_rs = 31;
int lcd_pino_rw = 33;
int lcd_pino_enable = 35;
int lcd_pino_dados_4 = 30;
int lcd_pino_dados_5 = 32;
int lcd_pino_dados_6 = 34;
int lcd_pino_dados_7 = 36;
LiquidCrystal lcd(lcd_pino_rs,lcd_pino_rw,lcd_pino_enable,lcd_pino_dados_4,lcd_pino_dados_5,lcd_pino_dados_6,lcd_pino_dados_7);

void setup() {
  pinMode(pino_led_verde, OUTPUT);
  pinMode(pino_led_verde2, OUTPUT);
  lcd.begin(16,2);
}

void loop() {
  digitalWrite(pino_led_verde,HIGH);
  digitalWrite(pino_led_verde2,HIGH);
  lcd.setCursor(0,0);
  lcd.print("Oi");

}