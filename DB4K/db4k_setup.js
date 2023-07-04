//LEDs
var DB4K_pino_LED_verde= 11;
var DB4K_pino_LED_amarelo=10;
var DB4K_pino_LED_vermelho=9;
var DB4K_pino_LED_verde2= 49;
var DB4K_pino_LED_amarelo2=51;
var DB4K_pino_LED_vermelho2=53;
var DB4K_pino_LED_verdeS= 'A0';
var DB4K_pino_LED_amareloS=4;
var DB4K_pino_LED_vermelhoS=2;
var DB4K_pino_LED_azul=12;
var DB4K_velocidade_baixa_blink=1000;
var DB4K_velocidade_media_blink=500;
var DB4K_velocidade_alta_blink=150;

//LED RGB
var DB4K_pino_RGB_vermelho=2;
var DB4K_pino_RGB_verde=4;
var DB4K_pino_RGB_azul=5;

//MOTORES
var DB4K_pino_Servo_Motor=1;
var DB4K_pino_MotorDC=3;
var DB4K_velocidade_baixa_motorDC=90;
var DB4K_velocidade_media_motorDC=130;
var DB4K_velocidade_alta_motorDC=250;

//LCD
var DB4K_pino_rs=31;
var DB4K_pino_rw=33;
var DB4K_pino_enable=35;
var DB4K_pino_dados_4=30;
var DB4K_pino_dados_5=32;
var DB4K_pino_dados_6=34;
var DB4K_pino_dados_7=36;
var DB4K_tamanho_linha_LCD=16;
var DB4K_velocidade_serial=9600;

//DISPLAY 7SEG
var DB4K_pino_segmento_F=26;
var DB4K_pino_segmento_G=28;
var DB4K_pino_segmento_E=23;
var DB4K_pino_segmento_D=25;
var DB4K_pino_segmento_A=24;
var DB4K_pino_segmento_B=22;
var DB4K_pino_segmento_C=27;
var DB4K_pino_ponto_decimal=29;

//BUZZER
var DB4K_pino_buzzer=8;

//SENSOR_DISTANCIA
var DB4K_tipo_biblioteca_ultrassonico=1;
//'1' para biblio antiga (ultrasonic.Ranging(CM))e 
//'2' para a biblio nova (ultrasonic.read())
var DB4K_pino_ultrasonic_echo=7;
var DB4K_pino_ultrasonic_envio_sinal=6;
var DB4K_ultrasonic_delay_leitura=100;

//SENSOR_TEMPERATURA
var DB4K_pino_analogico_sensor_temperatura='A0';
var DB4K_valor_margem_temperatura_alta = 3;
var DB4K_valor_margem_temperatura_baixa = 3;


//SENSOR_LUZ
var DB4K_pino_analogico_LDR_luz='A1';
var DB4K_valor_margem_luz_alta = 70;
var DB4K_valor_margem_luz_baixa = 90;

//SENSOR_REFLETANCIA
var DB4K_tipo_leitura_sensor='a'; //'d' para digital e 'a' para anal�gico
var DB4K_pino_analogico_sensor_linha_direito='A2';
var DB4K_pino_analogico_sensor_linha_esquerdo='A3';
var DB4K_pino_digital_sensor_linha_direito=2;
var DB4K_pino_digital_sensor_linha_esquerdo=3;
var DB4K_valor_margem_refletancia_baixa = 50;
var DB4K_valor_margem_refletancia_alta = 50;


//POTENCIOMETRO
var DB4K_pino_analogico_potenciometro = 'A5';
var DB4K_med_val_potenciometro_sup = 700;
var DB4K_med_val_potenciometro_inf = 300;

//SENSOR DE TOQUE
var DB4K_pino_sensor_toque = 15;
var DB4K_pino_sensor_toque1 = 16;
var DB4K_pino_sensor_toque2 = 14;
var DB4K_pino_sensor_toque3 = 17;


//CARRINHO
var DB4K_pino_motor_esquerdo_IN3=12;   
var DB4K_pino_motor_esquerdo_IN4=13;    
var DB4K_pino_enable_motor_esquerdo=11;

var DB4K_pino_motor_direito_IN1= 8;    
var DB4K_pino_motor_direito_IN2=9;   
var DB4K_pino_enable_motor_direito=10;

var DB4K_velocidade_motor_esquerdo=100;
var DB4K_velocidade_motor_direito=100;

var DB4K_tempo_andando_para_frente=600;
var DB4K_tempo_virar_esquerda=500;
var DB4K_tempo_virar_direita=500;
var DB4K_tempo_pausa=1000;
	
//BRACO ROBOTICO
var DB4K_pino_servo_base_braco=9;
var DB4K_pino_servo_garra_braco=8;
var DB4K_pino_servo_direita_braco=11;
var DB4K_pino_servo_esquerda_braco=10;
var DB4K_min_servo_direita=90;
var DB4K_max_servo_direita=120;
var DB4K_min_servo_esquerda=90;
var DB4K_max_servo_esquerda=180;
var DB4K_min_servo_base=45;
var DB4K_meio_servo_base=80;
var DB4K_max_servo_base=118;
var DB4K_min_servo_garra=0;
var DB4K_max_servo_garra=35;
var DB4K_ext_servo_dir_pega_objeto=130;
var DB4K_ext_servo_dir_solta_objeto=115;
var DB4K_ext_servo_esq_solta_objeto=120;
var DB4K_ext_servo_esq_pega_objeto=120;
var DB4K_delay_movimento=30;

/**
//SENSOR COR
var DB4K_tipo_sensor_cor='TCS_3200';
var DB4K_sensor_cor_delay_leitura=1000;
//vari�veis sensor cor LDR; 
var DB4K_pino_analogico_LDR_cor='A2';
var DB4K_LDR_verde_min=100;
var DB4K_LDR_verde_max=199;
var DB4K_LDR_vermelha_min=200;
var DB4K_LDR_vermelha_max=299;
var DB4K_LDR_azul_min=300;
var DB4K_LDR_azul_max=399;
var DB4K_LDR_preta_min=400;
var DB4K_LDR_preta_max=499;
var DB4K_LDR_branca_min=500;
var DB4K_LDR_branca_max=599;
//vari�veis sensor cor TCS3200;
var DB4K_pino_sensor_TCS3200_S0="NULL";
var DB4K_pino_sensor_TCS3200_S1="NULL";
var DB4K_pino_sensor_TCS3200_S2="NULL";
var DB4K_pino_sensor_TCS3200_S3="NULL";
var DB4K_pino_sensor_TCS3200_OUT="NULL";
var DB4K_pino_sensor_TCS3200_OE="NULL";
var DB4K_pino_sensor_TCS3200_LED="NULL";
//Adicionais vari�veis sensor cor TCS3200 com Biblioteca
var DB4K_TCS3200_verde_min=100000;
var DB4K_TCS3200_verde_max=128000;
var DB4K_TCS3200_azul_min=132000;
var DB4K_TCS3200_azul_max=135000;
var DB4K_TCS3200_vermelho_min=140000;
var DB4K_TCS3200_vermelho_max=160000;
var DB4K_TCS3200_branco_min=727000;
var DB4K_TCS3200_branco_max=730000;
var DB4K_TCS3200_preto_min=65000;
var DB4K_TCS3200_preto_max=90000;

**/
