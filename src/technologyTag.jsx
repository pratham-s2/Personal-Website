//tailwind deletes classes that arent hardcoded. So i am using a map here to let tailwind know that I will be using these classes

const textMap = {
    "bg-purple-950/30": "bg-purple-100 dark:bg-purple-950/30",
    "text-purple-300": "text-purple-800 dark:text-purple-300",
  
    "bg-pink-950/30": "bg-pink-100 dark:bg-pink-950/30",
    "text-pink-300": "text-pink-800 dark:text-pink-300",
  
    "bg-blue-950/30": "bg-blue-100 dark:bg-blue-950/30",
    "text-blue-300": "text-blue-800 dark:text-blue-300",
  
    "bg-yellow-950/30": "bg-yellow-100 dark:bg-yellow-950/30",
    "text-yellow-300": "text-yellow-800 dark:text-yellow-300",
  
    "bg-green-950/30": "bg-green-100 dark:bg-green-950/30",
    "text-green-300": "text-green-800 dark:text-green-300",
  
    "bg-red-950/30": "bg-red-100 dark:bg-red-950/30",
    "text-red-300": "text-red-800 dark:text-red-300",
  
    "bg-orange-950/30": "bg-orange-100 dark:bg-orange-950/30",
    "text-orange-300": "text-orange-800 dark:text-orange-300",
  }
  



function TechnologyTag ({text_col, bg_col, text}){
    return (
        <div className={`px-2 py-1 rounded ${textMap[text_col]} ${textMap[bg_col]} w-max h-max text-sm`}>
            {text}
        </div>
    )
}


export default TechnologyTag;