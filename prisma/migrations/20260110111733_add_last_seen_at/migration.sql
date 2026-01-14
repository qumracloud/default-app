-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "store" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "accessToken" TEXT NOT NULL,
    "userId" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "emailVerified" BOOLEAN DEFAULT false,
    "refreshToken" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Session" ("accessToken", "createdAt", "email", "emailVerified", "firstName", "id", "isOnline", "lastName", "refreshToken", "store", "userId") SELECT "accessToken", "createdAt", "email", "emailVerified", "firstName", "id", "isOnline", "lastName", "refreshToken", "store", "userId" FROM "Session";
DROP TABLE "Session";
ALTER TABLE "new_Session" RENAME TO "Session";
CREATE UNIQUE INDEX "Session_id_key" ON "Session"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
