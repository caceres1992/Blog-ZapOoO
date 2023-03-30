
import React from 'react'

const SkeletonCard = () => {
    return (
        <>
            <div className="flex w-full flex-1 flex-col items-center">
                <div className=" w-full animate-pulse rounded-xl">
                    <div className="flex flex-col space-y-2">
                        <div className="h-40 w-full rounded-md bg-silver-300 "></div>
                        <div className="h-6 w-full rounded-md bg-silver-300 "></div>
                        <div className="h-6 w-full rounded-md bg-silver-300 "></div>
                        <div className="h-3 w-full rounded-md bg-silver-300 "></div>
                        <div className="h-3 w-full rounded-md bg-silver-300 "></div>
                        <div className="h-3 w-full rounded-md bg-silver-300 "></div>
                        <div className="h-6 w-3/12 rounded-md bg-silver-300 "></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkeletonCard