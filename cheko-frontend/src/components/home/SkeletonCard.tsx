import { Box, Grid, Paper, Skeleton } from '@mui/material';
import React from 'react';

function MenuCardSkeleton() {
  return (
    <Grid size={4}>

    <Paper elevation={0} sx={{ borderRadius: 2, p: 1 }}>
      <Box display="flex" gap={2} alignItems="center">
        <Skeleton
          variant="rectangular"
          width={138}
          height={138}
          sx={{ borderRadius: 3, flexShrink: 0 }}
          />
        <Box flex={1}>
          <Skeleton width="60%" height={28} />
          <Skeleton width="30%" height={20} sx={{ mt: 1 }} />
          <Skeleton width={90} height={28} sx={{ mt: 2, mb: 3 }} />
          <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
            <Skeleton variant="text" width={80} height={28} />
            <Box display="flex" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={35} height={35} />
              <Skeleton variant="text" width={20} height={20} />
              <Skeleton variant="circular" width={35} height={35} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
    </Grid>
  );
}

export default MenuCardSkeleton;
