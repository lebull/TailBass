import { Box, Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";

export const UpcomingEvents = () =><Box m={5}>
    <Box display="flex" justifyContent="center">
        <Typography color="textSecondary" textAlign="center" variant="h6" gutterBottom>
            Future Events
        </Typography>
    </Box>
    <Box display="flex" justifyContent="center" flexWrap="wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => 
            <Box key={i} p={3} width={1/4} minWidth="300px">
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
</Box>