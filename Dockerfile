FROM nginx:alpine

# Copiază fișierele statice build-uite
COPY dist/ /usr/share/nginx/html

# Suprascrie configurația NGINX cu fallback pentru SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
