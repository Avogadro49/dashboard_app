"""empty message

Revision ID: 06e827e2c2ef
Revises: d34f0e287d5b
Create Date: 2024-11-18 15:41:17.288915

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '06e827e2c2ef'
down_revision = 'd34f0e287d5b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('groups',
    sa.Column('id', sa.BigInteger(), autoincrement=True, nullable=False),
    sa.Column('group_number', sa.BigInteger(), nullable=False),
    sa.Column('profession_id', sa.BigInteger(), nullable=False),
    sa.Column('collage_id', sa.BigInteger(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('groups')
    # ### end Alembic commands ###
