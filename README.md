# Python พื้นฐาน — Slidev

Slidev รวม 7 บทเป็นหลักสูตรเดียว โดยแยกไฟล์บทเรียนตามหัวข้อ และแยกโจทย์ด่าน IPO แต่ละข้อเป็นคนละไฟล์

## Run

```bash
pnpm install
./run.sh
```

`./run.sh` หรือ `pnpm dev` เปิดหลักสูตรรวมจาก `slides.md` ส่วน `pnpm dev:01` ถึง `pnpm dev:07` ใช้เปิดแต่ละ session แยกได้

## Build

```bash
pnpm build
```

ผลลัพธ์หลักสูตรรวมอยู่ใน `dist/course` หากต้องการ build แยก session ใช้ `pnpm build:sessions`

ตัวอย่างสำคัญมีปุ่ม Run Python ผ่าน Pyodide และ deck ใช้ light theme ตาม `DESIGN.md`
