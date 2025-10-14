import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Autocomplete,
  Typography,
  InputAdornment,
} from '@mui/material';
import { countries as countryListJson } from 'country-list-json';
import countryCodesData from '../data/CountryCodes.json';

const CountryCodeSelector = ({ 
  name = "phone", 
  label = "Phone Number", 
  required = true, 
  fullWidth = true,
  value = "",
  onChange = () => {},
  sx = {},
  inputTextColor = "#000",
  labelColor = "#000",
  labelFocusedColor = "#1976d2",
  ...props 
}) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(true);

  // Comprehensive country flag mapping
  const getCountryFlag = (code) => {
    const flagMap = {
      // Europe
      'IS': '🇮🇸', 'GB': '🇬🇧', 'DE': '🇩🇪', 'FR': '🇫🇷', 'ES': '🇪🇸', 'IT': '🇮🇹',
      'NL': '🇳🇱', 'SE': '🇸🇪', 'NO': '🇳🇴', 'DK': '🇩🇰', 'FI': '🇫🇮', 'AT': '🇦🇹',
      'BE': '🇧🇪', 'CH': '🇨🇭', 'CZ': '🇨🇿', 'GR': '🇬🇷', 'HU': '🇭🇺', 'IE': '🇮🇪',
      'LU': '🇱🇺', 'PL': '🇵🇱', 'PT': '🇵🇹', 'RO': '🇷🇴', 'SK': '🇸🇰', 'SI': '🇸🇮',
      'BG': '🇧🇬', 'HR': '🇭🇷', 'CY': '🇨🇾', 'EE': '🇪🇪', 'LV': '🇱🇻', 'LT': '🇱🇹',
      'MT': '🇲🇹', 'RU': '🇷🇺', 'UA': '🇺🇦', 'BY': '🇧🇾', 'MD': '🇲🇩', 'AL': '🇦🇱',
      'BA': '🇧🇦', 'ME': '🇲🇪', 'MK': '🇲🇰', 'RS': '🇷🇸', 'XK': '🇽🇰', 'AD': '🇦🇩',
      'LI': '🇱🇮', 'MC': '🇲🇨', 'SM': '🇸🇲', 'VA': '🇻🇦', 'GI': '🇬🇮', 'FO': '🇫🇴',
      'GL': '🇬🇱', 'SJ': '🇸🇯', 'AX': '🇦🇽', 'IM': '🇮🇲', 'JE': '🇯🇪', 'GG': '🇬🇬',
      
      // Americas
      'US': '🇺🇸', 'CA': '🇨🇦', 'BR': '🇧🇷', 'AR': '🇦🇷', 'MX': '🇲🇽', 'CL': '🇨🇱',
      'CO': '🇨🇴', 'PE': '🇵🇪', 'VE': '🇻🇪', 'UY': '🇺🇾', 'PY': '🇵🇾', 'BO': '🇧🇴',
      'EC': '🇪🇨', 'GY': '🇬🇾', 'SR': '🇸🇷', 'GF': '🇬🇫', 'FK': '🇫🇰', 'GS': '🇬🇸',
      'BZ': '🇧🇿', 'CR': '🇨🇷', 'CU': '🇨🇺', 'DO': '🇩🇴', 'GT': '🇬🇹', 'HN': '🇭🇳',
      'JM': '🇯🇲', 'NI': '🇳🇮', 'PA': '🇵🇦', 'SV': '🇸🇻', 'TT': '🇹🇹', 'BB': '🇧🇧',
      'AG': '🇦🇬', 'BS': '🇧🇸', 'DM': '🇩🇲', 'GD': '🇬🇩', 'KN': '🇰🇳', 'LC': '🇱🇨',
      'VC': '🇻🇨', 'VG': '🇻🇬', 'VI': '🇻🇮', 'PR': '🇵🇷', 'AW': '🇦🇼', 'CW': '🇨🇼',
      'SX': '🇸🇽', 'BQ': '🇧🇶', 'BL': '🇧🇱', 'MF': '🇲🇫', 'PM': '🇵🇲', 'TC': '🇹🇨',
      
      // Asia
      'JP': '🇯🇵', 'KR': '🇰🇷', 'CN': '🇨🇳', 'IN': '🇮🇳', 'TR': '🇹🇷', 'IL': '🇮🇱',
      'AE': '🇦🇪', 'SA': '🇸🇦', 'TH': '🇹🇭', 'VN': '🇻🇳', 'MY': '🇲🇾', 'SG': '🇸🇬',
      'ID': '🇮🇩', 'PH': '🇵🇭', 'BD': '🇧🇩', 'PK': '🇵🇰', 'LK': '🇱🇰', 'NP': '🇳🇵',
      'MM': '🇲🇲', 'KH': '🇰🇭', 'LA': '🇱🇦', 'MN': '🇲🇳', 'KZ': '🇰🇿', 'UZ': '🇺🇿',
      'KG': '🇰🇬', 'TJ': '🇹🇯', 'TM': '🇹🇲', 'AF': '🇦🇫', 'IR': '🇮🇷', 'IQ': '🇮🇶',
      'JO': '🇯🇴', 'LB': '🇱🇧', 'SY': '🇸🇾', 'YE': '🇾🇪', 'OM': '🇴🇲', 'QA': '🇶🇦',
      'BH': '🇧🇭', 'KW': '🇰🇼', 'BN': '🇧🇳', 'TL': '🇹🇱', 'MV': '🇲🇻', 'BT': '🇧🇹',
      'TW': '🇹🇼', 'HK': '🇭🇰', 'MO': '🇲🇴', 'KP': '🇰🇵', 'GE': '🇬🇪', 'AM': '🇦🇲',
      'AZ': '🇦🇿', 'CY': '🇨🇾', 'TR': '🇹🇷',
      
      // Africa
      'ZA': '🇿🇦', 'EG': '🇪🇬', 'NG': '🇳🇬', 'KE': '🇰🇪', 'ET': '🇪🇹', 'GH': '🇬🇭',
      'TZ': '🇹🇿', 'UG': '🇺🇬', 'DZ': '🇩🇿', 'MA': '🇲🇦', 'TN': '🇹🇳', 'LY': '🇱🇾',
      'SD': '🇸🇩', 'SS': '🇸🇸', 'TD': '🇹🇩', 'NE': '🇳🇪', 'ML': '🇲🇱', 'BF': '🇧🇫',
      'CI': '🇨🇮', 'SN': '🇸🇳', 'GM': '🇬🇲', 'GN': '🇬🇳', 'SL': '🇸🇱', 'LR': '🇱🇷',
      'TG': '🇹🇬', 'BJ': '🇧🇯', 'CM': '🇨🇲', 'CF': '🇨🇫', 'CD': '🇨🇩', 'CG': '🇨🇬',
      'GA': '🇬🇦', 'ST': '🇸🇹', 'GQ': '🇬🇶', 'AO': '🇦🇴', 'ZM': '🇿🇲', 'ZW': '🇿🇼',
      'BW': '🇧🇼', 'NA': '🇳🇦', 'SZ': '🇸🇿', 'LS': '🇱🇸', 'MW': '🇲🇼', 'MZ': '🇲🇿',
      'MG': '🇲🇬', 'MU': '🇲🇺', 'SC': '🇸🇨', 'KM': '🇰🇲', 'DJ': '🇩🇯', 'SO': '🇸🇴',
      'ER': '🇪🇷', 'RW': '🇷🇼', 'BI': '🇧🇮', 'CV': '🇨🇻', 'GW': '🇬🇼', 'GN': '🇬🇳',
      'MR': '🇲🇷', 'EH': '🇪🇭', 'YT': '🇾🇹', 'RE': '🇷🇪', 'SH': '🇸🇭',
      
      // Oceania
      'AU': '🇦🇺', 'NZ': '🇳🇿', 'FJ': '🇫🇯', 'PG': '🇵🇬', 'NC': '🇳🇨', 'VU': '🇻🇺',
      'SB': '🇸🇧', 'TO': '🇹🇴', 'WS': '🇼🇸', 'KI': '🇰🇮', 'TV': '🇹🇻', 'NR': '🇳🇷',
      'FM': '🇫🇲', 'MH': '🇲🇭', 'PW': '🇵🇼', 'CK': '🇨🇰', 'NU': '🇳🇺', 'TK': '🇹🇰',
      'WF': '🇼🇫', 'PF': '🇵🇫', 'AS': '🇦🇸', 'GU': '🇬🇺', 'MP': '🇲🇵', 'VI': '🇻🇮',
      'PR': '🇵🇷', 'UM': '🇺🇲', 'PN': '🇵🇳', 'NF': '🇳🇫', 'AQ': '🇦🇶', 'TF': '🇹🇫',
      'HM': '🇭🇲', 'CC': '🇨🇨', 'CX': '🇨🇽', 'IO': '🇮🇴', 'BV': '🇧🇻', 'TF': '🇹🇫'
    };
    return flagMap[code] || '🌍';
  };

  // Load countries with fallback to local data
  useEffect(() => {
    const loadCountries = async () => {
      try {
        let dataSource;
        
        // Try to use country-list-json package first
        if (countryListJson && Array.isArray(countryListJson) && countryListJson.length > 0) {
          console.log('Using country-list-json package');
          dataSource = countryListJson;
        } else {
          console.log('Falling back to local CountryCodes.json');
          dataSource = countryCodesData;
        }

        const countryList = dataSource
          .map(country => ({
            name: country.name,
            code: country.code,
            callingCode: country.dial_code,
            flag: getCountryFlag(country.code),
            region: getRegionFromCode(country.code),
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        console.log('Loaded countries:', countryList.length);
        setCountries(countryList);
        
        // Set default to Iceland if available
        const iceland = countryList.find(country => country.code === 'IS');
        if (iceland) {
          setSelectedCountry(iceland);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error loading country codes:', error);
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  // Helper function to determine region from country code
  const getRegionFromCode = (code) => {
    const europeanCodes = ['IS', 'GB', 'DE', 'FR', 'ES', 'IT', 'NL', 'SE', 'NO', 'DK', 'FI', 'AT', 'BE', 'CH', 'CZ', 'GR', 'HU', 'IE', 'LU', 'PL', 'PT', 'RO', 'SK', 'SI', 'BG', 'HR', 'CY', 'EE', 'LV', 'LT', 'MT'];
    const americasCodes = ['US', 'CA', 'BR', 'AR', 'MX', 'CL', 'CO', 'PE', 'VE', 'UY', 'PY', 'BO', 'EC', 'GY', 'SR', 'GF', 'FK'];
    const asiaCodes = ['JP', 'KR', 'CN', 'IN', 'TR', 'IL', 'AE', 'SA', 'TH', 'VN', 'MY', 'SG', 'ID', 'PH', 'BD', 'PK', 'LK', 'NP', 'MM', 'KH', 'LA', 'MN', 'KZ', 'UZ', 'KG', 'TJ', 'TM', 'AF', 'IR', 'IQ', 'JO', 'LB', 'SY', 'YE', 'OM', 'QA', 'BH', 'KW'];
    const africaCodes = ['ZA', 'EG', 'NG', 'KE', 'ET', 'GH', 'TZ', 'UG', 'DZ', 'MA', 'TN', 'LY', 'SD', 'SS', 'TD', 'NE', 'ML', 'BF', 'CI', 'SN', 'GM', 'GN', 'SL', 'LR', 'GH', 'TG', 'BJ', 'CM', 'CF', 'TD', 'NE', 'ML', 'BF', 'CI', 'SN', 'GM', 'GN', 'SL', 'LR', 'GH', 'TG', 'BJ', 'CM', 'CF'];
    const oceaniaCodes = ['AU', 'NZ', 'FJ', 'PG', 'NC', 'VU', 'SB', 'TO', 'WS', 'KI', 'TV', 'NR', 'FM', 'MH', 'PW', 'CK', 'NU', 'TK', 'WF', 'PF', 'AS', 'GU', 'MP', 'VI', 'PR'];
    
    if (europeanCodes.includes(code)) return 'Europe';
    if (americasCodes.includes(code)) return 'Americas';
    if (asiaCodes.includes(code)) return 'Asia';
    if (africaCodes.includes(code)) return 'Africa';
    if (oceaniaCodes.includes(code)) return 'Oceania';
    return 'Other';
  };

  // Handle country selection
  const handleCountryChange = (event, newValue) => {
    setSelectedCountry(newValue);
    const fullPhoneNumber = newValue ? `${newValue.callingCode}${phoneNumber}` : phoneNumber;
    onChange({
      target: {
        name: name,
        value: fullPhoneNumber
      }
    });
  };

  // Handle phone number input
  const handlePhoneChange = (event) => {
    const number = event.target.value;
    setPhoneNumber(number);
    const fullPhoneNumber = selectedCountry ? `${selectedCountry.callingCode}${number}` : number;
    onChange({
      target: {
        name: name,
        value: fullPhoneNumber
      }
    });
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start', ...sx }}>
      {/* Country Code Selector */}
      <Autocomplete
        value={selectedCountry}
        onChange={handleCountryChange}
        options={countries}
        loading={loading}
        getOptionLabel={(option) => `${option.flag} ${option.callingCode} ${option.name}`}
        filterOptions={(options, { inputValue }) => {
          const filtered = options.filter(option => {
            const searchTerm = inputValue.toLowerCase();
            return (
              option.name.toLowerCase().includes(searchTerm) ||
              option.callingCode.includes(searchTerm) ||
              option.code.toLowerCase().includes(searchTerm)
            );
          });
          return filtered;
        }}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            <Typography component="span" sx={{ mr: 1 }}>
              {option.flag}
            </Typography>
            <Typography component="span" sx={{ mr: 1, fontWeight: 'bold' }}>
              {option.callingCode}
            </Typography>
            <Typography component="span" sx={{ color: 'text.secondary' }}>
              {option.name}
            </Typography>
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Country"
            variant="outlined"
            size="small"
            sx={{ 
              minWidth: 120,
              '& .MuiInputBase-root': {
                height: '56px'
              }
            }}
            InputProps={{
              ...params.InputProps,
              sx: {
                color: inputTextColor,
              },
              startAdornment: selectedCountry && (
                <InputAdornment position="start">
                  <Typography sx={{ fontSize: '1.2rem' }}>
                    {selectedCountry.flag}
                  </Typography>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              sx: {
                color: labelColor,
                "&.Mui-focused": {
                  color: labelFocusedColor,
                },
              },
            }}
          />
        )}
        sx={{ minWidth: 200 }}
      />

      {/* Phone Number Input */}
      <TextField
        name={name}
        label={label}
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneChange}
        required={required}
        fullWidth={fullWidth}
        variant="outlined"
        placeholder="Enter phone number"
        InputProps={{
          sx: {
            color: inputTextColor,
          },
          startAdornment: selectedCountry && (
            <InputAdornment position="start">
              <Typography sx={{ 
                color: inputTextColor, 
                fontWeight: 'bold',
                fontSize: '1rem'
              }}>
                {selectedCountry.callingCode}
              </Typography>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          sx: {
            color: labelColor,
            "&.Mui-focused": {
              color: labelFocusedColor,
            },
          },
        }}
        {...props}
      />
    </Box>
  );
};

export default CountryCodeSelector;