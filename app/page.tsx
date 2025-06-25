import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <h1>ພໍ່ ບັກໄກວັນ ຊື່ ສົມດີ</h1>
      <Image src="/logo.png" width={100} height={100} alt="Logo" />
    </div>
  );
}