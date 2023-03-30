import React from 'react'

const Container = ({ py, children,className }) => {
    return (
        <div className={`${className} px-5 sm:px-10 mx-auto  max-w-[1514px]  bg-red-200`}>
            {children}
        </div>
    )
}

export default Container