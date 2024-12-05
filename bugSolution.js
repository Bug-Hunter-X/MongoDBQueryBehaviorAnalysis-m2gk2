```javascript
// Correct usage: Handling null separately
db.collection.find({ $or: [{ field: { $in: [1, 2] } }, { field: null }] });

// Alternative: Removing null values before using $in
const validValues = [1, 2, null].filter(value => value !== null);
db.collection.find({ field: { $in: validValues } });
```