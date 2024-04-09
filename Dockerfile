FROM nginx:alpine
# 切換靜態文件所在的目錄位置
WORKDIR /usr/share/nginx/html
# 移除原來默認的靜態文件
RUN rm -rf ./*
# 複製新的靜態文件至當下目錄位置
COPY . .
# 開啟端口 80
EXPOSE 80
# 執行 nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
