# iTL Free Classroom
国際情報学部と理工学部の空き教室を可視化するアプリです。

## サイトのリンク

https://itlfreeclassroom.web.app/

## 最初にすること

### プロジェクト指定のnode.jsへの切り替え(nvmを使っている人向け)
1. `nvm install`

2. `nvm use`

※Node.jsの推奨バージョンは`.nvmrc`ファイルに記載してあります。最低でもNode.jsのバージョンは**v18.xx**, **v20.xx**, **v22.xx**のいずれかである必要があります。

### 必要なパッケージのインストール
`npm install`

## ローカルサーバーを立ち上げたいとき
`npm run serve`

※ローカルサーバーの場合は、ログインしなくてもPathを自分で指定すれば各ページ閲覧できます。

※ローカルサーバーでメール認証をする場合は、メールで送られてきた認証メールの、/email-verification?以下をコピーして、自分のローカルホストのurl（http://localhost:8000 など）以下にはりつけてください。送られてきたリンクをそのまま開くと認証に失敗します。

## デプロイ方法
1. `npm build`

2. `npx firebase deploy`

## ファイルの構成
    itl-free-classroom                        # プロジェクトルート
    ├─ .firebase                              # ホスティングのキャッシュフォルダ（自分でいじることなし）
    │   ├─ hosting.ZGlzdA.cache               
    │   └─ hosting.cHVibGlj.cache              
    │   
    ├─ dist                                   # ビルド後の静的フォルダ（自分でいじることなし）
    │   ├─ css                                 
    │   │   └─ app.7d95540c.css                
    │   │   
    │   ├─ img                                 
    │   │   ├─ 10F.41429853.png                
    │   │   ├─ 11F.b58dd445.png                
    │   │   ├─ 3F.31a0ef6d.png                 
    │   │   ├─ 4F.8512cc9c.png                 
    │   │   ├─ 5F.ee5667b7.png                 
    │   │   ├─ 7F.4931a954.png                 
    │   │   ├─ 8F.39d4e561.png                 
    │   │   ├─ 9F.4fba80b8.png                 
    │   │   └─ search-icon.14f427bd.svg        
    │   │   
    │   ├─ js                                  
    │   │   ├─ app.3f4d6e97.js                 
    │   │   ├─ app.3f4d6e97.js.map             
    │   │   ├─ chunk-vendors.68b5e1be.js      
    │   │   └─ chunk-vendors.68b5e1be.js.map  
    │   │   
    │   ├─ 404.html                           
    │   ├─ favicon.ico                        
    │   └─ index.html                         
    │   
    ├─ public                                 # ビルド前の公開用ファイル（コピーされてdistに反映）
    │   ├─ 404.html                           # 404ページ
    │   ├─ favicon.ico                        # ファビコン（webサイトのアイコン）
    │   └─ index.html                         # 開始ページ（Vueテンプレート）（基本的にいじらない）
    │   
    ├─ src                                    # ソースコードのメインディレクトリ （基本的にいじるのはこのフォルダ以下）
    │   ├─ assets                             # 画像などを格納するフォルダ
    │   │   ├─ 10F.png                        # 10階のフロアマップ
    │   │   ├─ 11F.png                        # 11階のフロアマップ
    │   │   ├─ 3F.png                         # 3階のフロアマップ
    │   │   ├─ 4F.png                         # 4階のフロアマップ
    │   │   ├─ 5F.png                         # 5階のフロアマップ
    │   │   ├─ 7F.png                         # 7階のフロアマップ
    │   │   ├─ 8F.png                         # 8階のフロアマップ
    │   │   ├─ 9F.png                         # 9階のフロアマップ
    │   │   └─ search-icon.svg                # サーチアイコン
    │   │   
    │   ├─ components                         # Vueコンポーネントフォルダ（基本的に、このフォルダ下にサイトのページファイルを追加していく）
    │   │   ├─ 10thFloor.vue                  # 現在10階で行われている授業を見られるページ
    │   │   ├─ 11thFloor.vue                  # 現在11階で行われている授業を見られるページ
    │   │   ├─ 3rdFloor.vue                   # 現在3階で行われている授業を見られるページ
    │   │   ├─ 4thFloor.vue                   # 現在4階で行われている授業を見られるページ
    │   │   ├─ 5thFloor.vue                   # 現在5階で行われている授業を見られるページ
    │   │   ├─ 7thFloor.vue                   # 現在7階で行われている授業を見られるページ
    │   │   ├─ 8thFloor.vue                   # 現在8階で行われている授業を見られるページ
    │   │   ├─ 9thFloor.vue                   # 現在9階で行われている授業を見られるページ
    │   │   ├─ ClassInfo.vue                  # 授業の詳しい情報を見られるページ
    │   │   ├─ EmailVerificationPage.vue      # メール認証ページ
    │   │   ├─ FloorSelect.vue                # フロア選択ページ
    │   │   ├─ FreeclassroomInfo.vue          # 一括で空き教室を見られるページ
    │   │   ├─ HomePage.vue                   # 最初に表示されるページ
    │   │   ├─ SearchClass.vue                # 教室検索ページ
    │   │   ├─ SignInPage.vue                 # ログインページ
    │   │   ├─ SignUpPage.vue                 # 新規登録ページ
    │   │   ├─ TestPage.vue                   # テスト用の仮ページ
    │   │   └─ TopPage.vue                    # ログイン後最初に表示されるページ
    │   │   
    │   ├─ lib                                # ライブラリフォルダ
    │   │   ├─ auth.js                        # Firebase Authenticationの認証処理
    │   │   └─ gas.js                         # GASとの通信処理
    │   │   
    │   ├─ router                             # ルーティング設定フォルダ
    │   │   └─ index.js                       # ルーティング定義（URLとコンポーネントの紐づけ）
    │   │   
    │   ├─ App.vue                            # アプリケーション全体のレイアウトと設定
    │   ├─ firebase.js                        # Firebaseの初期化処理
    │   └─ main.js                            # アプリのエントリーポイント
    │   
    ├─ .env                                   # 環境変数（APIキーなど）を設定
    ├─ .firebaserc                            # Firebaseプロジェクト設定
    ├─ .gitignore                             # Gitで無視するファイルリスト
    ├─ .nvmrc                                 # 使用するNode.jsのバージョン指定
    ├─ README.md                              # プロジェクトの概要説明
    ├─ babel.config.js                        # Babelの設定ファイル（JSトランスパイル用）
    ├─ firebase.json                          # Firebaseの設定ファイル（HostingやFunctionsなど）
    ├─ jsconfig.json                          # JS/TS開発向けの補完設定（VS Code向け）
    ├─ package-lock.json                      # 依存関係の固定ファイル（npm用）
    ├─ package.json                           # プロジェクトの依存関係・スクリプトなど定義
    └─ vue.config.js                          # Vue CLIの設定ファイル