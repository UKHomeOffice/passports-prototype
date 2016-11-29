module.exports = {
    '/': {
        template: 'index',
        fields:['companyName', 'postcode'],
        next: '/processing-image'
    },
    '/processing-image': {
        next: '/photo-uploaded-success'
    },
    '/processing-image-unsucc': {
        next: '/photo-uploaded-unsuccessfuly'
    },
    '/photo-uploaded-unsuccessfuly': {
        next: '/photo-uploaded-success'
    },
    '/photo-uploaded-success': {
        next: '/photo-uploaded-success'
    }
};
