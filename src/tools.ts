export const getMainBG = (selection: number) => {
  switch (selection) {
    case 2:
      return 'bg-mbg2'
    case 3:
      return 'bg-mbg3'
    case 4:
      return 'bg-mbg4'
    default:
      return 'bg-mbg1'
  }
}

export const getPeripheralBG = (selection: number) => {
  switch (selection) {
    case 2:
      return 'bg-pbg2'
    case 3:
      return 'bg-pbg3'
    case 4:
      return 'bg-pbg4'
    default:
      return 'bg-pbg1'
  }
}

export const getMainDecoration = (selection: number) => {
  switch (selection) {
    case 2:
      return 'decoration-mbg2'
    case 3:
      return 'decoration-mbg3'
    case 4:
      return 'decoration-mbg4'
    default:
      return 'decoration-mbg1'
  }
}

export const getMainBorder = (selection: number) => {
  switch (selection) {
    case 2:
      return 'border-mbg2'
    case 3:
      return 'border-mbg3'
    case 4:
      return 'border-mbg4'
    default:
      return 'border-mbg1'
  }
}

export const getPeripheralBorder = (selection: number) => {
  switch (selection) {
    case 2:
      return 'border-pbg2'
    case 3:
      return 'border-pbg3'
    case 4:
      return 'border-pbg4'
    default:
      return 'border-pbg1'
  }
}

export const getBodyText = (selection: number) => {
  switch (selection) {
    case 2:
      return 'text-[#333333]'
    case 3:
      return 'text-[#333333]'
    case 4:
      return 'text-[#F3F3F3]'
    default:
      return 'text-[#F3F3F3]'
  }
}

export const getTitleText = (selection: number) => {
  switch (selection) {
    case 2:
      return 'text-[#F3F3F3]'
    case 3:
      return 'text-[#333333]'
    case 4:
      return 'text-[#F3F3F3]'
    default:
      return 'text-pbg1'
  }
}

export const getInitialScheme = () => {
  let tempScheme = localStorage.getItem('colorScheme')
  return tempScheme ? JSON.parse(tempScheme) : 1
}
