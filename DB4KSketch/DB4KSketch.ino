#include <LiquidCrystal.h>

int lcd_pino_rs = 31;
int lcd_pino_rw = 33;
int lcd_pino_enable = 35;
int lcd_pino_dados_4 = 30;
int lcd_pino_dados_5 = 32;
int lcd_pino_dados_6 = 34;
int lcd_pino_dados_7 = 36;
LiquidCrystal lcd(lcd_pino_rs,lcd_pino_rw,lcd_pino_enable,lcd_pino_dados_4,lcd_pino_dados_5,lcd_pino_dados_6,lcd_pino_dados_7);

void setup() {
  lcd.begin(16,2);
}

void loop() {
  lcd.clear();

}