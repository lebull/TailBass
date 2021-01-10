import { Box, Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";

export const UpcomingEvents = () => <Box display="flex">
    {[1, 2, 3].map(i => 
        <Box key={i} m={3}>
            <Card>
                <CardContent>
                    <Typography color="text" gutterBottom>
                        Event Name
                    </Typography>
                    <p>Lorem Ipsum</p>
                    <p>12, 31, 9999</p>
                </CardContent>
            </Card>
        </Box>
    )}
</Box>