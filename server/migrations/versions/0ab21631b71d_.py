"""empty message

Revision ID: 0ab21631b71d
Revises: f2ca63b56058
Create Date: 2024-11-19 15:10:22.467327

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '0ab21631b71d'
down_revision = 'f2ca63b56058'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('groups', schema=None) as batch_op:
        batch_op.add_column(sa.Column('college_id', sa.BigInteger(), nullable=True))
        batch_op.drop_constraint('groups_ibfk_1', type_='foreignkey')
        batch_op.create_foreign_key(None, 'colleges', ['college_id'], ['id'])
        batch_op.drop_column('collage_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('groups', schema=None) as batch_op:
        batch_op.add_column(sa.Column('collage_id', mysql.BIGINT(display_width=20), autoincrement=False, nullable=True))
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.create_foreign_key('groups_ibfk_1', 'colleges', ['collage_id'], ['id'])
        batch_op.drop_column('college_id')

    # ### end Alembic commands ###