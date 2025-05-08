import * as React from 'react';
import { Card, CardActions, CardContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Cardwidget({ title, component, style, onRemove }) {
  return (
    <Card
      sx={{
        width: '30%',
        height: '280px',
        borderRadius: '20px',
        backgroundColor: 'whitesmoke',
        position: 'relative',
      }}
    >
      {/* X (close) button */}
      {onRemove && (
        <IconButton
          onClick={onRemove}
          size="small"
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      )}

      <CardContent>
        <Typography component="div" sx={{ fontSize: '18px' }}>
          {title}
        </Typography>
      </CardContent>

      <CardActions style={style}>{component}</CardActions>
    </Card>
  );
}
