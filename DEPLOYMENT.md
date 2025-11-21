# 🚀 Deployment Guide

This guide will help you deploy Walleto to production using Vercel (frontend) and Render (backend).

---

## 📦 Prerequisites

- GitHub account with this repository
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Render account (sign up at [render.com](https://render.com))
- MongoDB Atlas account (sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas))

---

## 🗄️ Step 1: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a new cluster (free tier is fine)
3. Go to **Database Access** → Create a database user with password
4. Go to **Network Access** → Add IP Address → Allow access from anywhere (`0.0.0.0/0`)
5. Click **Connect** → **Connect your application**
6. Copy the connection string (looks like `mongodb+srv://username:password@cluster.mongodb.net/`)
7. Replace `<password>` with your actual password
8. Add database name: `mongodb+srv://username:password@cluster.mongodb.net/walleto_app`

---

## 🔧 Step 2: Deploy Backend to Render

### Create Web Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **New +** → **Web Service**
3. Connect your GitHub repository: `sujalcharati/Walleto`
4. Configure the service:
   - **Name**: `walleto-be` (or your preferred name)
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
   - **Instance Type**: Free

### Add Environment Variables

In the **Environment** section, add these variables:

| Key | Value | Notes |
|-----|-------|-------|
| `URL` | `mongodb+srv://user:pass@cluster.mongodb.net/walleto_app` | Your MongoDB connection string from Step 1 |
| `secret_key` | `generate-a-long-random-string-here` | JWT secret (use a password generator) |
| `NODE_ENV` | `production` | Sets Node environment |

**Generate a secure JWT secret:**
```bash
# Run this locally to generate a random secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### Deploy

1. Click **Create Web Service**
2. Wait for deployment to complete
3. Copy your backend URL (e.g., `https://walleto-be.onrender.com`)
4. Test it by visiting: `https://walleto-be.onrender.com/` (should see "hi there")

---

## 🌐 Step 3: Deploy Frontend to Vercel

### Connect Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Add New...** → **Project**
3. Import `sujalcharati/Walleto` repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)

### Add Environment Variables

In **Environment Variables** section, add:

| Name | Value | Environments |
|------|-------|--------------|
| `VITE_API_URL` | `https://walleto-be.onrender.com` | Production, Preview, Development |

⚠️ **Important**: Replace `https://walleto-be.onrender.com` with your actual Render backend URL from Step 2.

### Deploy

1. Click **Deploy**
2. Wait for deployment to complete
3. Visit your site at the provided URL (e.g., `https://walleto.vercel.app`)

---

## 🔐 Step 4: Update Backend CORS

Your backend needs to allow requests from your Vercel domain.

1. Open `server/index.js` in your code
2. Update the CORS origins array to include your Vercel URL:

```javascript
app.use(cors({ 
  origin: [
    "https://walleto.vercel.app",  // Your Vercel URL
    "http://localhost:5173",        // Local development
    "http://localhost:3000"         // Alternative local
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));
```

3. Commit and push:
```bash
git add server/index.js
git commit -m "Update CORS to allow Vercel domain"
git push origin main
```

4. Render will automatically redeploy

---

## ✅ Step 5: Test Your Deployment

1. Visit your Vercel URL (e.g., `https://walleto.vercel.app`)
2. Try to sign up with a new account
3. Try to log in
4. Add some transactions
5. Verify everything works

---

## 🐛 Troubleshooting

### Frontend shows "Network Error"
- Check that `VITE_API_URL` is set correctly in Vercel
- Verify your Render backend is running
- Check browser console for specific errors

### Backend shows "MongoDB connection failed"
- Verify `URL` environment variable in Render
- Check MongoDB Atlas network access allows `0.0.0.0/0`
- Verify database user credentials are correct

### CORS errors
- Ensure your Vercel URL is added to CORS origins in `server/index.js`
- Redeploy backend after updating CORS

### 500 Internal Server Error
- Check Render logs: **Dashboard → Your Service → Logs**
- Look for error messages and stack traces

---

## 🔄 Redeployment

### Automatic Deployments

Both Vercel and Render are configured for automatic deployments:
- **Push to `main` branch** → Both services redeploy automatically
- Vercel: Redeploys frontend
- Render: Redeploys backend

### Manual Redeployment

**Vercel:**
1. Go to your project dashboard
2. Click **Deployments** tab
3. Click **...** on latest deployment → **Redeploy**

**Render:**
1. Go to your service dashboard
2. Click **Manual Deploy** → **Deploy latest commit**

---

## 📝 Environment Variables Summary

### Frontend (Vercel)
```env
VITE_API_URL=https://walleto-be.onrender.com
```

### Backend (Render)
```env
URL=mongodb+srv://username:password@cluster.mongodb.net/walleto_app
secret_key=your-generated-secret-key
NODE_ENV=production
```

---

## 🎉 Done!

Your Walleto app is now live in production! 

- **Frontend**: https://walleto.vercel.app
- **Backend**: https://walleto-be.onrender.com

For local development, follow the instructions in the main `README.md`.
