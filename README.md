# Python พื้นฐาน — Slidev

Slidev รวม 6 sessions เป็นหลักสูตรเดียว และมีด่านส่ง IPO ก่อนเริ่ม session ถัดไป

## Run

```bash
pnpm install
./run.sh
```

`./run.sh` หรือ `pnpm dev` เปิดหลักสูตรรวมจาก `slides.md` ส่วน `pnpm dev:01` ถึง `pnpm dev:06` ยังใช้เปิดแต่ละ session แยกได้

## Build

```bash
pnpm build
```

ผลลัพธ์หลักสูตรรวมอยู่ใน `dist/course` หากต้องการ build แยก session ใช้ `pnpm build:sessions`

ตัวอย่างสำคัญมีปุ่ม Run Python ผ่าน Pyodide และ deck รองรับการสลับ light/dark mode
