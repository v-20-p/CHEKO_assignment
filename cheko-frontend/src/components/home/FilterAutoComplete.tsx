import { Autocomplete, InputAdornment, SvgIcon, TextField } from '@mui/material';

// Assuming you have categories/options to filter by
// You would typically get these from your menu items
const filterOptions = [

  'Breakfast',
  'Drinks',
  'Soups',
  'Sushi',

];

// Component usage
const FilterAutocomplete = ({ filterBy, setFilterBy }:{filterBy:string,setFilterBy: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <Autocomplete
      id="filter-autocomplete"
      options={filterOptions}
      value={filterBy}
      onChange={(_event, newValue) => {
        setFilterBy(newValue||"");
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Filter"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { border: 'none' },
              '&:hover fieldset': { border: 'none' },
              '&.Mui-focused fieldset': { border: 'none' },
              '& input': {
                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                width: { xs: '100%', sm: '43.333%' },
                '::placeholder': {
                  opacity: 4,
                },
              },
            },
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <InputAdornment position="start">
                  <SvgIcon 
                    color="primary"
                    sx={{ 
                      fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' } 
                    }}
                  >
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.2" clipPath="url(#clip0_3_14)">
                        <path d="M11.25 20.25H15.75V18H11.25V20.25ZM3.375 6.75V9H23.625V6.75H3.375ZM6.75 14.625H20.25V12.375H6.75V14.625Z" fill="black" />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_14">
                          <rect width="27" height="27" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </SvgIcon>
                </InputAdornment>
                {params.InputProps.startAdornment}
              </>
            )
          }}
        />
      )}
      
      autoHighlight
      disableClearable={false} 
      sx={{
        width: { xs: '100%', sm: '43.333%' }
      }}
    />
  );
};

export default FilterAutocomplete;