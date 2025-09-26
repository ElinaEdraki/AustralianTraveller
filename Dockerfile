# مرحله ۱: انتخاب بیس ایمیج
FROM node:18

# مرحله ۲: تنظیم پوشه کاری داخل کانتینر
WORKDIR /app

# مرحله ۳: کپی package*.json برای نصب dependency ها
COPY package*.json ./

# مرحله ۴: نصب dependency ها
RUN npm install

# مرحله ۵: کپی بقیه کدها
COPY . .

# مرحله ۶: اکسپوز کردن پورت
EXPOSE 3000

# مرحله ۷: دستور اجرا
CMD ["node", "server.js"]
