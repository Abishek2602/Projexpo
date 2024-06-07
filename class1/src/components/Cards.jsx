import React from "react";

function Cards() {
  return (
    <div className="justify-between flex flex-row">
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-extra-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-l-extra-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/Abishek.jpg" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Abishek Madhavan</h5>
        <h2 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Cheif Excecutive Officer</h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hello this Abishek, i am working as CEO to build an Enormous Website to help the Students to manage their Projects</p>
    </div>
</a>
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-extra-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-l-extra-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/siva1.png" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sivasurya</h5>
        <h2 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Cheif Technology Officer</h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hello this Sivasurya, i am working as CEO to build an Enormous Website to help the Students to manage their Projects</p>
    </div>
</a>
</div>
  );
}

export default Cards;
