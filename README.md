## Objetivo

- Montar uma aplicação web/android/ios, que receba um fluxo de video em flv em h.256
  - Vai ser necessário back ou front ?
  - O que é flv e h.256 ?
  - Como gerar um fluxo flv ?

## Ideias

- Uma aplicação back que envia o arquivo flv comprimido por h.256
- Uma aplicação front que recebe o arquivo flv descomprimi e toca o vídeo

## Conceitos

### H.256

- HEVC/H.256/MPEG-H Part 2
- Padrão de compressão de vídeo
- Oferece cerca de 25% a 50% de melhoramento na compressão mantando a qualidade do mesmo nível se comparado com AVC

### WebRTC

### HLS

### FLV

- Formato usado para entregar videos sobre a internet
- Extensão de arquivo de vídeo

### RTMP

### RTSP

## Anotações Reunião

```
h265 chrome support
bitmovin
hevec/h.265
srs - servico de streaming existem prs de h265
android	e ios ja davam suporte
codec de video
videos e imagem	fiquem menores
deixando a qualidade melhor
limitação
suporte	ao flv (forma de envio)
hls, webrtc
rtmp camera manda
rtsp como comunica com a camera
hls entrega pro	usuario	final
web rtc	entrega	pro final diminuição de	delay
flv formato flash para empacotamento
montar um stand	alone que funciona web android e ios
receba um fluxo	de viedo em flv	em h.265

srsPlayer
URL do vídeo entende se webrtc e rtsp
Joga pra certo tipo de método
```
