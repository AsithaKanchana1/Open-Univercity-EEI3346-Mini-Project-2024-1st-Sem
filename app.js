new Vue({
    el: '#app', // Targeting the element with id 'app' in the HTML
    data: {
        newComment: '', // Initializing a data property to store the new comment
        comments: [] // Initializing an empty array to store all comments
    },
    methods: {
        addComment() { // Method to add a new comment
            // Check if the new comment is not empty or just whitespace
            if (this.newComment.trim() !== '') {
                // Push the trimmed new comment to the 'comments' array
                this.comments.push(this.newComment.trim());
                // Reset the newComment data property to an empty string for the next comment
                this.newComment = '';
            }
        }
    }
});