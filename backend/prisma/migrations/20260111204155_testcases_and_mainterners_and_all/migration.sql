-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profilepic" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" UUID NOT NULL,
    "number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "Time_Limit" TEXT NOT NULL,
    "Memory_Limit" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "example" TEXT NOT NULL,
    "constains" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "Number_of_Submission" INTEGER NOT NULL,
    "Question_Name" TEXT NOT NULL,
    "Question_Tag" TEXT NOT NULL,
    "Take_Time" TEXT NOT NULL,
    "code_lang" TEXT NOT NULL,
    "Result" TEXT NOT NULL,
    "Time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Space_Taken" TEXT NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Testcases" (
    "id" UUID NOT NULL,
    "questionid" UUID NOT NULL,
    "inputvalues" INTEGER[],
    "outputAnswer" INTEGER[],

    CONSTRAINT "Testcases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mainterners" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "secretcode" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mainterners_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Question_number_key" ON "Question"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Mainterners_name_key" ON "Mainterners"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Mainterners_email_key" ON "Mainterners"("email");

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Testcases" ADD CONSTRAINT "Testcases_questionid_fkey" FOREIGN KEY ("questionid") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
