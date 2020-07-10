# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null :false|
|email|string|null :false|
|password|string|null :false|
### Association
- has_many :message
- has_many :groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null :false|
### Association
- belongs_to :user
- has_many :message 

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null :false|
|user_id|integer|null: false, foreign_key: true|
|image|text||
### Association
- belongs_to :user
- belongs_to :group
