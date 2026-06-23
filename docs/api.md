# API仕様書

## GET /api/habits

習慣一覧を取得する

### レスポンス

```json
[
  {
    "id": 1,
    "name": "筋トレ",
    "description": "毎日10分",
    "created_at": "2026-06-16T00:00:00.000Z"
  }
]
```

---

## POST /api/habits

習慣を追加する

### リクエスト

```json
{
  "name": "筋トレ",
  "description": "毎日10分"
}
```

### レスポンス

```json
{
  "message": "habit created"
}
```

---

## POST /api/logs

習慣の記録を追加する

### リクエスト

```json
{
  "habit_id": 1,
  "date": "2026-06-23",
  "done": true
}
```

### レスポンス

```json
{
  "message": "log created"
}
```
