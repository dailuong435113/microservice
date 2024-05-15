# Sử dụng image cơ bản
FROM node:14

# Thiết lập thư mục làm việc
WORKDIR /usr/src/app

# Copy package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Copy tất cả các file còn lại vào container
COPY . .

# Khai báo cổng mà ứng dụng sẽ chạy trên đó
EXPOSE 3001

# Lệnh để chạy ứng dụng
CMD [ "node", "index.js" ]
