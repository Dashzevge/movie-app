export const FormatDuration = (duration) => {

    if (!duration || typeof duration !== 'string') {
        return '0h 0m'; 
    }
    
    const match = duration.match(/PT(\d+H)?(\d+M)?/);

    if (!match) {
        return '0h 0m';
    }

    const hours = match[1] ? match[1].slice(0, -1) : "0";   
    const minutes = match[2] ? match[2].slice(0, -1) : "0"; 
    return `${hours}h ${minutes}m`;
};
