import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center p-10 my-10 dark:border-gray-700 border-gray-200">
      <p className="text-sm">
        Copyright © {currentYear} - All rights reserved by Guglex Technologies
      </p>
    </div>
  );
}
