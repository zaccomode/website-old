let itemsPerPage = 6;

// CREATE POST OBJECT
function createPost(data) { 
    let post = document.createElement('a');
    post.classList.add('instagram-post');
    post.style.backgroundImage = 'url(' + (data.thumbnail_url || data.media_url) + ')';
    post.href = data.permalink;
    post.target = '_blank';

    // Gradient overlay
    let gradientOverlay = document.createElement('div');
    gradientOverlay.classList.add('gradient-overlay');
    post.appendChild(gradientOverlay);

    let gradientContent = document.createElement('div');
    gradientContent.classList.add('content-horizontal', 'except');
    gradientOverlay.appendChild(gradientContent);

    let gradientIcon = document.createElement('span');
    gradientIcon.classList.add('material-icons-round');
    gradientIcon.innerHTML = 'favorite';
    gradientContent.appendChild(gradientIcon);

    let gradientLikeCount = document.createElement('h4');
    gradientLikeCount.innerHTML = data.like_count;
    gradientContent.appendChild(gradientLikeCount);


    // Info overlay
    let infoOverlay = document.createElement('div');
    infoOverlay.classList.add('info-overlay');
    post.appendChild(infoOverlay);

    let infoTitle = document.createElement('h3');
    infoTitle.innerHTML = '@' + data.username;
    infoOverlay.appendChild(infoTitle);

    let caption = document.createElement('p');
    caption.innerHTML = data.caption;
    infoOverlay.appendChild(caption);

    let infoContent = document.createElement('div');
    infoContent.classList.add('content-horizontal', 'except');
    infoOverlay.appendChild(infoContent);

    let infoIcon = document.createElement('span');
    infoIcon.classList.add('material-icons-round');
    infoIcon.innerHTML = 'favorite';
    infoContent.appendChild(infoIcon);

    let infoLikeCount = document.createElement('h4');
    infoLikeCount.innerHTML = data.like_count;
    infoContent.appendChild(infoLikeCount);

    let container = document.getElementById('instagram-content');
    container.appendChild(post);
}

// CREATE EMPTY STATE
function createEmptyState(items) {
    document.getElementById('instagram-content').innerHTML = '';
    let container = document.getElementById('instagram-content');

    for (let i = 0; i < items; i++) {
        let emptyState = document.createElement('div');
        emptyState.classList.add('instagram-empty');
        let emptyStateIcon = document.createElement('span');
        emptyStateIcon.classList.add('material-icons-round');
        emptyStateIcon.innerHTML = 'hourglass_empty';
        emptyState.appendChild(emptyStateIcon);

        container.appendChild(emptyState);
    }
}

// REQUEST USER INFORMATION
function loadInstagram() {
    // Create empty state
    createEmptyState(itemsPerPage);

    fetch(serverDomain + 'instagram/media?items=' + itemsPerPage)
        .then(response => response.json())
        .then(data => {

            // Check for errors
            if (data.error) {
                console.log(data.error);
                return;
            }

            document.getElementById('instagram-content').innerHTML = '';

            console.log(data);

            // Iterate through every item
            for (item of data) { 
                // Create new instagram post object
                createPost(item);
            }
        });
}