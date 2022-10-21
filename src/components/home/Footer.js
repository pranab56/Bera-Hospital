import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 mt-20">
    <div className=" p-6 mx-auto">
        <div className="lg:flex">
           

            <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">SERVICES</h3>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Emergency Checkup</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Monthly Checkup</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Weekly Checkup</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Deep Checkup</a>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">ORAL HEALTH</h3>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Fluoride Treatment  </a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Cavity Filling</a>
                        <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Teath Whitening</a>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">OUR ADDRESS</h3>
                        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>
                    </div>
                </div>
            </div>
        </div>

        <hr  className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
            <p className="text-center text-gray-500 dark:text-gray-400">© Brand 2020 - All rights reserved</p>
        </div>
    </div>
</footer>
    );
};

export default Footer;