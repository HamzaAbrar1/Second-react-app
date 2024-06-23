import React, { useState } from 'react'

export default function useMultiplierby10(val) {


const [state,setState]=useState(10);



let sd=val*state;

return sd;
}
