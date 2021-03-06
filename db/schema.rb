# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20101011230320) do

  create_table "games", :force => true do |t|
    t.string   "title"
    t.boolean  "over",       :default => false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "matched",    :default => false
  end

  add_index "games", ["matched"], :name => "index_games_on_matched"
  add_index "games", ["over"], :name => "index_games_on_over"
  add_index "games", ["title"], :name => "index_games_on_title"

  create_table "kills", :force => true do |t|
    t.integer  "game_id"
    t.integer  "player_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "target_id"
  end

  add_index "kills", ["game_id"], :name => "index_kills_on_game_id"
  add_index "kills", ["player_id"], :name => "index_kills_on_player_id"
  add_index "kills", ["target_id"], :name => "index_kills_on_target_id"

  create_table "players", :force => true do |t|
    t.string   "name"
    t.integer  "game_id"
    t.boolean  "dead",       :default => false
    t.integer  "target_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "players", ["dead"], :name => "index_players_on_dead"
  add_index "players", ["game_id"], :name => "index_players_on_game_id"
  add_index "players", ["target_id"], :name => "index_players_on_target_id"

end
