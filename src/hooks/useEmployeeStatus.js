const useEmployeeStatus = (startdate) => {  
    const startDate = new Date(startdate);  
    if (isNaN(startDate)) {
        console.error("Invalid start date");
        return { error: "Invalid start date" };
    }

    const daysDifferenceFromCurent = (date) => {
        const currentDate = new Date();
        const diff = currentDate.valueOf() - date.valueOf();
        const days = Math.floor(diff / (1000*60*60*24));
        return days;
    };
    
    const yearPassed = Math.floor(daysDifferenceFromCurent(startDate) / 365);

    const monthPassed = Math.floor(daysDifferenceFromCurent(startDate) / 30);

    const isProbationPeriod = daysDifferenceFromCurent(startDate) <= 180;
    const isRecognitionYear = yearPassed % 5 === 0 && yearPassed > 0;

    return {
        yearPassed,
        monthPassed,
        isProbationPeriod,
        isRecognitionYear,
        startDate,
    };
};

export default useEmployeeStatus;
