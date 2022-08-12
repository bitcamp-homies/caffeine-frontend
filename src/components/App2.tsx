import React from 'react';

const App2 = () => {
    return (
        <div>
            <div className="flex-grow max-w-[420px] mr-auto ml-auto lg:mr-6 lg:ml-0 block">
                <h2 className="mb-[3.2rem!important] font-semibold text-[1.2rem] md:text-[1.6rem]">
                    <span className="relative px-2 pb-3 block after:bg-[#d4e9e2] after:rounded-xl after:bottom-0 after:h-[4px] after:absolute after:w-full after:left-0">Size options</span> 
                </h2>
                <form className="mb-[3.2rem!important] text-center block p-0">
                    <fieldset>
                    <div className="inline-block px-0 my-3 relative w-[72px] h-[104px] m-0 align-top">
                        <div className="activeCircle___2TirY"></div>
                        <label>
                        <input className="radioButton___1xrBQ" data-e2e="Tall" id="Tall" name="size" type="radio" value="Tall"/>
                        <div className="cursor-pointer mx4 my2 tall-cold___1dsM6 sizeImage___1Dy_a"></div>
                        <p className="text-xs text-center text-semibold">Tall</p>
                        <p className="text-xxs text-center"> 12 fl oz</p>
                        </label>
                    </div>
                    <div className="inline-block px-0 my-3 relative w-[72px] h-[104px] text-left m-0 align-top">
                        <label>
                        <input className="radioButton___1xrBQ" data-e2e="Grande" id="Grande" name="size" type="radio" value="Grande"/>
                        <div className="cursor-pointer mx4 my2 grande-cold___FuZPD sizeImage___1Dy_a"></div>
                        <p className="text-xs text-center text-semibold">Grande</p>
                        <p className="text-xxs text-center"> 16 fl oz</p>
                        </label>
                    </div>
                    <div className="inline-block px-0 my-3 relative w-[72px] h-[104px] text-left m-0 align-top">
                        <label>
                        <input className="radioButton___1xrBQ" data-e2e="Venti" id="Venti" name="size" type="radio" value="Venti" checked/>
                        <div className="cursor-pointer mx4 my2 venti-cold___HUsbw sizeImage___1Dy_a"></div>
                        <p className="text-xs text-center text-semibold">Venti</p>
                        <p className="text-xxs text-center"> 24 fl oz</p>
                        </label>
                    </div>
                    <div className="inline-block px-0 my-3 relative w-[72px] h-[104px] text-left m-0 align-top">
                        <label>
                        <input className="radioButton___1xrBQ" data-e2e="Trenta" id="Trenta" name="size" type="radio" value="Trenta"/>
                        <div className="cursor-pointer mx4 my2 trenta-cold___2qcGz sizeImage___1Dy_a"></div>
                        <p className="text-xs text-center text-semibold">Trenta</p>
                        <p className="text-xxs text-center"> 30 fl oz</p>
                        </label>
                    </div>
                    </fieldset>
                </form>
                <div className="pb5">
                    <div className="flex items-center" data-e2e="availabilityStatus">
                    <svg aria-hidden="true" className="valign-middle color-black60 mr2 w-[24px] h-[24px]" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path d="M11.508 19.22c-.667-.918-1.335-1.888-1.956-2.863-.432-.676-.826-1.33-1.175-1.956-1.037-1.857-1.617-3.357-1.617-4.308 0-2.984 2.297-5.31 5.24-5.31s5.24 2.326 5.24 5.31c0 .95-.58 2.45-1.617 4.31-.35.624-.743 1.28-1.175 1.955-.62.975-1.29 1.945-1.956 2.864-.174.24-.34.465-.492.67-.153-.205-.318-.43-.492-.67zm6.732-9.128c0-3.533-2.743-6.31-6.24-6.31-3.497 0-6.24 2.777-6.24 6.31 0 1.173.628 2.796 1.744 4.796.36.644.763 1.315 1.204 2.007.634.993 1.312 1.98 1.99 2.913.238.327.458.625.656.887l.252.33c.2.256.588.256.788 0l.252-.33c.198-.262.418-.56.656-.887.678-.934 1.356-1.92 1.99-2.913.44-.692.845-1.363 1.204-2.007 1.116-2 1.744-3.623 1.744-4.796z"></path>
                        <path d="M12 13.425c1.592 0 2.88-1.303 2.88-2.908s-1.288-2.91-2.88-2.91c-1.592 0-2.88 1.305-2.88 2.91 0 1.605 1.288 2.908 2.88 2.908zm0-1c-1.037 0-1.88-.853-1.88-1.908 0-1.056.843-1.91 1.88-1.91s1.88.854 1.88 1.91c0 1.055-.843 1.908-1.88 1.908z"></path>
                    </svg> 
                    <span className="color-textBlackSoft" data-e2e="store-not-selected-message">Select a store to view availability</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App2;