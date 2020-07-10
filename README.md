# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null :false|
|email|string|null :false|
|password|string|null :false|
### Association
- has_many :messages
- has_many :groups
- has_many :groups, through: :users_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null :false|
### Association
- has_many :users
- has_many :messages
- has_many :users, through: :users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer||
|group_id|integer||

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|user_id|integer|null: false, foreign_key: true|
|image|text||
|group_id|integer||
### Association
- belongs_to :user
- belongs_to :group
